import classes from './Sidebar.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch('/category');
      const res = await response.json();
      setCategorys(res);
    };

    getCategory();
  }, []);

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
          {categorys.map((category) => (
            <Link to={`/?cat=${category.name}`} className={classes.link}>
              <li className={classes.sidebarListItem} key={category._id}>
                {category.name}
              </li>
            </Link>
          ))}
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
