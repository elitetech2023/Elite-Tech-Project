import React, { useState,useEffect } from 'react';
import {FaBars,FaBell,FaBookOpen,FaSpa,FaHome,FaSignOutAlt} from "react-icons/fa";
import { NavLink,Link } from 'react-router-dom';
import Header from './Header';
import {onAuthStateChanged,signOut,} from "firebase/auth";
import {auth} from '../firebase';

function Sidebar({children}) {

    const [user, setUser] = useState({});
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/managenotifications",
            name:"Notifications",
            icon:<FaBell/>
        },
        {
            path:"/book",
            name:"Book",
            icon:<FaBookOpen/>
        },
        {
            path:"/life",
            name:"LifeStyle",
            icon:<FaSpa/>
        },  
    ]

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

    const logout = async () => {
        await signOut(auth);
      };

  return (
    <div>
    <Header/>
    
    <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h6 style={{display: isOpen ? "block" : "none"}} className="logo">close</h6>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                 <Link to='/'>
                <FaSignOutAlt size={21} className="link" activeclassName="active" onClick={logout} />
                </Link>
            
           </div>
           <main>
            {children}
            <div style={{marginRight: "100px", marginTop: "800px"}}>{user ? user.email : "Not Logged In"}</div>
            </main>
        </div>

    </div>

    
  )
}

export default Sidebar