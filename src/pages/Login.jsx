import React from 'react';
import LoginForm from '../components/LoginForm';

import logo from '../assets/logo.png';
import loginImage from '../assets/background.jpg';
import '../styles/loginPage.css';

export default function Login() {
  return (
    <div className="login-background">
      <div className="login-container">

        <div className="login-form">
          <img className="logo" src={ logo } alt="" />
          <h1>RevMob</h1>
          <p>Welcome to the advertise paradise</p>
          <LoginForm />
        </div>

        <div className="login-image">
          <img src={ loginImage } alt="" />
        </div>

      </div>
    </div>
  );
}
