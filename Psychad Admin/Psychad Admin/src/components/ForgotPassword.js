import React, { useEffect, useState } from 'react';
import "../Style/Login.css";
import img from '../images/psych.png';
import uj_logo from "../images/uj_logo.png";
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { Toast } from "reactstrap";


function ForgotPassword() {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  const [email, setEmail] = useState("");

  function forgotpassword(email) {
    return sendPasswordResetEmail(auth, email )
  }

    function handleClick() {
      alert('Email is Sent check Your Emails');
    }

  return (
    <div className='login' >
    
      <div className='sideBar'>

       {/** uj psychad login div purple */}

       <div className='uj_div_purple'>
        <img src={img} alt='' className='image_psychad' />
        </div>

      {/** uj psychad login div orange */}

        <div className='uj_div_orange'>
        <img src={uj_logo} alt='' className='image_UJ' />
        </div>

      </div>

      {/**Login inputs and header */}

      <div className='Logincontainer'> 
      <h1 className='login_header'>Welcome Back Admin</h1>
     
      <div className='content_O'>

      <form onSubmit={async e => {
           e.preventDefault()
           //forgot password logic
           forgotpassword(email)
           .then(response => {
             console.log(response)
             Toast({
               description: "Email sent Check Your email",
               status: 'Success',
               duration: 5000,
               isClosable: true,
             })
           })
           .catch(e => { 
             console.log(e.message)
             Toast({
               description: "Email invalid ",
               status: 'unSuccessful',
               duration: 5000,
               isClosable: true,
             })
         })
         }}
         >

            {/** Email input */}
            <label >Email Address</label>
            <br />
            <input 
              className='inputs_text'
              type="email"
              placeholder="Enter your email"
              style={{marginTop: "8px"}}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <br />
    
            {/** password Reset button */}
            <br />
              <button className='btnlogin' type="submit" onClick={handleClick}>Reset Password</button>
              
    </form>

        <br style={{marginTop: "20px"}} />
          <Link to='/'>
              <p style={{color: "blue", fontWeight: "bold"}}>
                Back to Login?
              </p>
          </Link>

     </div>
    </div>


  </div>
  )
}

export default ForgotPassword
