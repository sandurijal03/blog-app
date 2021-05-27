import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const user = {
    username,
    email,
    password,
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      await response.json();
      window.location.replace('/login');
    } catch (err) {
      if (err) {
        setError(true);
      }
    }
  };

  return (
    <div className={classes.register}>
      <span className={classes.registerTitle}>Register</span>
      <form className={classes.registerForm} onSubmit={onSubmitForm}>
        <label className={classes.registerFormLabel}>Username</label>
        <input
          className={classes.registerInput}
          type='text'
          placeholder='Enter your username...'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={classes.registerFormLabel}>Email</label>
        <input
          className={classes.registerInput}
          type='email'
          placeholder='Enter your email...'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={classes.registerFormLabel}>Password</label>
        <input
          className={classes.registerInput}
          type='password'
          placeholder='Enter your password...'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className={classes.registerButton}>
          Register
        </button>
        {error && <span>Something went wrong</span>}
      </form>

      <button className={classes.registerLoginButton}>
        <Link to='/login'>Login</Link>
      </button>
    </div>
  );
};

export default Register;
