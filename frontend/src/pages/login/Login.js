import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

import classes from './Login.module.css';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const { isFetching, dispatch } = useContext(Context);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      const res = await response.json();

      dispatch({ type: 'LOGIN_SUCCESS', payload: res });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className={classes.login}>
      <span className={classes.loginTitle}>Login</span>
      <form className={classes.loginForm} onSubmit={onSubmit}>
        <label className={classes.loginFormLabel}>Username</label>
        <input
          className={classes.loginInput}
          type='text'
          placeholder='Enter your username...'
          ref={userRef}
        />
        <label className={classes.loginFormLabel}>Password</label>
        <input
          className={classes.loginInput}
          type='password'
          placeholder='Enter your password...'
          ref={passwordRef}
        />
        <button className={classes.loginButton} disabled={isFetching}>
          Login
        </button>
      </form>
      <button className={classes.loginRegisterButton}>
        <Link to='/register'>Register</Link>
      </button>
    </div>
  );
};

export default Login;
