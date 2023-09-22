import React from 'react';
import '../Style/Header.css';
import img from '../images/psych.png';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">
         <img src={img} alt='' />
        </div>

        <div className="header__right">
        <h2 style={{color: 'white'}}>PsyCad Admin Dashboard</h2>
        </div>
        
    </div>

    
  )
}

export default Header