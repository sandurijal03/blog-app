import React from 'react';
import classes from './Write.module.css';

const Write = () => {
  return (
    <div className={classes.write}>
      <img
        className={classes.writeImg}
        src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt=''
      />
      <form className={classes.writeForm}>
        <div className={classes.writeFormGroup}>
          <label htmlFor='fileInput'>
            <i className={`${classes.writeIcon}  fas fa-plus`}></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='title'
            className={classes.writeInput}
            autoFocus={true}
          />
        </div>
        <div className={classes.writeFormGroup}>
          <textarea
            className={`${classes.writeInput} ${classes.writeText}`}
            placeholder='Tell your story...'
            cols='30'
            rows='1'
          ></textarea>
        </div>
        <button className={classes.writeSubmit}>Publish</button>
      </form>
    </div>
  );
};

export default Write;
