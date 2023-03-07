import React, { useContext } from 'react';
import '../styles/loginForm.css';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function LoginForm() {
  const { user, setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const signIn = () => {
    navigate('/');
  };

  return (
    <form className="form-login">
      <div>
        <input
          type="text"
          name="login"
          value={ user }
          onChange={ ({ target }) => setUser(target.value) }
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
