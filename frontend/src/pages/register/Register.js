import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Register.module.css';

const Register = () => {
  return (
    <div className={classes.register}>
      <span className={classes.registerTitle}>Register</span>
      <form className={classes.registerForm}>
        <label className={classes.registerFormLabel}>Username</label>
        <input
          className={classes.registerInput}
          type='text'
          placeholder='Enter your username...'
        />

        <label className={classes.registerFormLabel}>Email</label>
        <input
          className={classes.registerInput}
          type='text'
          placeholder='Enter your email...'
        />
        <label className={classes.registerFormLabel}>Password</label>
        <input
          className={classes.registerInput}
          type='password'
          placeholder='Enter your password...'
        />
        <button className={classes.registerButton}>Register</button>
      </form>

      <button className={classes.registerLoginButton}>
        <Link to='/login'>Login</Link>
      </button>
    </div>
  );
};

export default Register;
