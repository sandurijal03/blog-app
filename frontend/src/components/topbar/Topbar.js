import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/Context';
import classes from './Topbar.module.css';

const Topbar = () => {
  let { user, dispatch } = useContext(Context);

  const handleLogout = (e) => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className={classes.top}>
      <div className={classes.topLeft}>
        <i className={`${classes.topIcon} fab fa-facebook-square`}></i>
        <i className={`${classes.topIcon} fab fa-twitter-square`}></i>
        <i className={`${classes.topIcon} fab fa-pinterest-square`}></i>
        <i className={`${classes.topIcon} fab fa-instagram-square`}></i>
      </div>
      <div className={classes.topCenter}>
        <ul className={classes.topList}>
          <li className={classes.topListItem}>
            <Link to='/'>HOME</Link>
          </li>

          <li className={classes.topListItem}>
            <Link to='/'>ABOUT</Link>
          </li>
          <li className={classes.topListItem}>
            <Link to='/'>CONTACT</Link>
          </li>

          <li className={classes.topListItem}>
            <Link to='/write'>WRITE</Link>
          </li>
          <li className={classes.topListItem} onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className={classes.topRight}>
        {user ? (
          <Link to='/settings'>
            <img src='images/dp.webp' alt='' className={classes.topImg} />
          </Link>
        ) : (
          <ul className={classes.topList}>
            <li className={classes.topListItem}>
              <Link className={classes.link} to='/login'>
                LOGIN
              </Link>
            </li>
            <li className={classes.topListItem}>
              <Link className={classes.link} to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className={`${classes.topSearchIcon} fas fa-search`}></i>
      </div>
    </div>
  );
};

export default Topbar;
