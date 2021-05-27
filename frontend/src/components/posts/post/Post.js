import React from 'react';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className={classes.post}>
      <img
        className={classes.postImg}
        src={`https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`}
        alt=''
      />
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
