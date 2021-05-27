import React, { useEffect, useState } from 'react';

import classes from './Home.module.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from 'react-router';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/post${search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();

      setPosts(res);
    };
    fetchPost();
  }, [search]);

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
