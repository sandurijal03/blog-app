import React from 'react';
import classes from './Post.module.css';

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
          <span className={classes.postCat}>Musicc</span>
          <span className={classes.postCat}>Life</span>
        </div>
        <span className={classes.postTitle}>{post.title}</span>
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
