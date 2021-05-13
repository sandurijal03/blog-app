import classes from './Sidebar.module.css';
import React from 'react';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>ABOUT ME</span>
        <img
          src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
          alt=''
          className={classes.sidebarImg}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          magnam.
        </p>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>CATEGORIES</span>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>Life</li>
          <li className={classes.sidebarListItem}>Music</li>
          <li className={classes.sidebarListItem}>Style</li>
          <li className={classes.sidebarListItem}>Sport</li>
          <li className={classes.sidebarListItem}>Tech</li>
          <li className={classes.sidebarListItem}>Cinema</li>
        </ul>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>FOLLOW US</span>
        <ul className={classes.sidebarSocial}>
          <i className={`${classes.sidebarIcon} fab fa-facebook-square`}></i>
          <i className={`${classes.sidebarIcon} fab fa-twitter-square`}></i>
          <i className={`${classes.sidebarIcon} fab fa-pinterest-square`}></i>
          <i className={`${classes.sidebarIcon} fab fa-instagram-square`}></i>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
