import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import classes from './Single.module.css';

const Single = () => {
  return (
    <div className={classes.single}>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
