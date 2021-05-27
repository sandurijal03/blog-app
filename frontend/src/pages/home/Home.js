import React, { useEffect, useState } from 'react';

import classes from './Home.module.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();

      setPosts(res);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className={classes.home}>
        <Posts posts={posts} key={posts._id} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
