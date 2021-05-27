import React, { useEffect, useState } from 'react';
import classes from './SinglePost.module.css';
import { useLocation } from 'react-router-dom';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/post/${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await response.json();
      setPost(res);
    };
    getPost();
  }, [path]);

  return (
    <div className={classes.singlePost}>
      <div className={classes.singlePostWrapper}>
        {post.photo && (
          <img src={post.photo} alt='' className={classes.singlePostImg} />
        )}

        <h1 className={classes.singlePostTitle}>
          {post.title}
          <div className={classes.singlePostEdit}>
            <i className={`${classes.singlePostIcon} far fa-edit`}></i>
            <i className={`${classes.singlePostIcon} far fa-trash-alt`}></i>
          </div>
        </h1>

        <div className={classes.singlePostInfo}>
          <span className={classes.singlePostAuthor}>
            Author: <b>{post.username}</b>
          </span>
          <span className={classes.singlePostDate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className={classes.singlePostDesc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
