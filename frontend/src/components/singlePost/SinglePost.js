import React from 'react';
import classes from './SinglePost.module.css';

const SinglePost = () => {
  return (
    <div className={classes.singlePost}>
      <div className={classes.singlePostWrapper}>
        <img
          src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 '
          alt=''
          className={classes.singlePostImg}
        />

        <h1 className={classes.singlePostTitle}>
          Lorem ipsum dolor sit amet.
          <div className={classes.singlePostEdit}>
            <i className={`${classes.singlePostIcon} far fa-edit`}></i>
            <i className={`${classes.singlePostIcon} far fa-trash-alt`}></i>
          </div>
        </h1>

        <div className={classes.singlePostInfo}>
          <span className={classes.singlePostAuthor}>
            Author: <b>Sandy</b>
          </span>
          <span className={classes.singlePostDate}>1 hour ago</span>
        </div>
        <p className={classes.singlePostDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
          nostrum libero sunt dolor maxime laboriosam commodi hic voluptatibus
          unde saepe nam labore laudantium reprehenderit, neque ipsam temporibus
          cum maiores enim beatae! Quisquam, facilis alias. Repellendus sapiente
          eaque quo nulla ipsam laborum delectus. Illo, explicabo hic. Quis eius
          quae, cupiditate voluptate tenetur sequi suscipit labore culpa impedit
          magni ea aut, quas necessitatibus? Distinctio quos quasi quas ipsam
          quisquam, sint provident tenetur ex? Temporibus vel neque modi
          perferendis quam! Beatae ex placeat recusandae vitae expedita eligendi
          cum qui, voluptatum possimus quidem, ipsam dignissimos quod veritatis
          perferendis culpa amet quam laborum doloribus sed!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
