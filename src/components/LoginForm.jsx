import React, { useContext } from 'react';
import '../styles/loginForm.css';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function LoginForm() {
  const { user, setUser } = useContext(AppContext);
  const ENTER_KEY_CODE = 13;
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form className="form-login">
      <div>
        <input
          type="text"
          name="login"
          value={ user }
          onChange={ (e) => setUser(e.target.value) }
          onKeyDown={ (e) => (e.keyCode === ENTER_KEY_CODE) && signIn(e) }
          className="input-login"
          placeholder="Username"
        />
      </div>

      <button
        type="button"
        className="btn-sign-in"
        onClick={ signIn }
      >
        Sign-In
      </button>
    </form>
  );
}
