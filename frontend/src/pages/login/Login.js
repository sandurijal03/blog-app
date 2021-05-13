import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={classes.login}>
      <span className={classes.loginTitle}>Login</span>
      <form className={classes.loginForm}>
        <label className={classes.loginFormLabel}>Email</label>
        <input
          className={classes.loginInput}
          type='text'
          placeholder='Enter your email...'
        />
        <label className={classes.loginFormLabel}>Password</label>
        <input
          className={classes.loginInput}
          type='password'
          placeholder='Enter your password...'
        />
        <button className={classes.loginButton}>Login</button>
      </form>
      <button className={classes.loginRegisterButton}>
        <Link to='/register'>Register</Link>
      </button>
    </div>
  );
};

export default Login;
