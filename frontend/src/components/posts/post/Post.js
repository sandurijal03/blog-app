import React from 'react';
import classes from './Post.module.css';

const Post = ({ img }) => {
  return (
    <div className={classes.post}>
      <img className={classes.postImg} src={img} alt='' />
      <div className={classes.postInfo}>
        <div className={classes.postCats}>
          <span className={classes.postCat}>Musicc</span>
          <span className={classes.postCat}>Life</span>
        </div>
        <span className={classes.postTitle}>Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className={classes.postDate}>1 hour ago</span>
      </div>
      <div className={classes.postDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda
        tenetur corporis voluptatum eaque accusantium aliquam non. Dignissimos,
        fuga labore!
      </div>
    </div>
  );
};

export default Post;
