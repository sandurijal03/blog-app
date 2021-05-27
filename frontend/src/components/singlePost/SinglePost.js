import React, { useContext, useEffect, useState } from 'react';
import classes from './SinglePost.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const PF = 'http://localhost:3001/images/';

  let details = {
    username: user.username,
  };

  const handleDelete = async () => {
    try {
      await fetch(`/post/${post._id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

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
          <img src={PF + post.photo} alt='' className={classes.singlePostImg} />
        )}

        <h1 className={classes.singlePostTitle}>
          {post.title}

          {post.username === user?.username && (
            <div className={classes.singlePostEdit}>
              <i className={`${classes.singlePostIcon} far fa-edit`}></i>
              <i
                className={`${classes.singlePostIcon} far fa-trash-alt`}
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className={classes.singlePostInfo}>
          <span className={classes.singlePostAuthor}>
            Author:
            <Link to={`/?user=${post.username}`} className={classes.link}>
              <b>{post.username}</b>
            </Link>
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
