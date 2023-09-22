import React, { useEffect, useState } from 'react';
import "../Style/Login.css";
import img from '../images/psych.png';
import uj_logo from "../images/uj_logo.png";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {

  {/** This code keeps the login page from displaying the content underneath */ }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  {/** useStates */ }

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      if (!loginEmail || !loginPassword) {
        alert('Please fill in all fields');
        return;
      }
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      // Redirect to /home if there is no error
      window.location.href = '/home';
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password');
      } else {
        console.log(error.message);
        // Prevent redirect here if there is an error
        window.location.href = '/';
      }
    }
  };


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

          {/** username input */}
          <label>Username</label>
          <br />
          <input type="text" placeholder='Enter username'
            className='inputs_text'
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            required
          />
          <br />

          {/** password input */}
          <br />
          <label>Password</label>
          <br />
          <input type="password" placeholder='Enter password' className='inputs_text'
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            required
          />
          <br />

          {/** password input */}
          <br />
          <button className='btnlogin' onClick={login}>Login</button>

          <br style={{ marginTop: "20px" }} />

          <Link to="/forgotPassword">
            <p className="forgotPassword">
              Forgot password?
            </p>
          </Link>

        </div>
      </div>


    </div>
  )
}

export default Login