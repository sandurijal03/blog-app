import React from 'react';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const PF = 'localhost:3001/images/';

  return (
    <div className={classes.post}>
      <img className={classes.postImg} src={PF + post.photo} alt='' />
      <div className={classes.postInfo}>
        <div className={classes.postCats}>
          {post.categories.map((c) => (
            <span className={classes.postCat}>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className={classes.postTitle}>{post.title}</span>
        </Link>
        <hr />
        <span className={classes.postDate}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className={classes.postDescription}>{post.desc}</div>
    </div>
  );
};

export default Post;
