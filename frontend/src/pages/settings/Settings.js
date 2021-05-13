import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import classes from './Settings.module.css';

const Settings = () => {
  return (
    <div className={classes.settings}>
      <div className={classes.settingsWrapper}>
        <div className={classes.settingsTitle}>
          <span className={classes.settingsTitleUpdate}>
            Update Your Account
          </span>
          <span className={classes.settingsTitleDelete}>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label className={classes.settingsFormLabel}>Profile Picture</label>
          <div className={classes.settingsPP}>
            <img
              src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className={`${classes.settingsPPIcon} far fa-user-circle`}></i>
            </label>
            <input
              id='fileInput'
              type='file'
              style={{ display: 'none' }}
              className={classes.settingsPPInput}
            />
          </div>
          <label className={classes.settingsFormLabel}>Username</label>
          <input
            className={classes.settingsFormInput}
            type='text'
            placeholder='sandy'
            name='name'
          />
          <label className={classes.settingsFormLabel}>Email</label>
          <input
            className={classes.settingsFormInput}
            type='email'
            placeholder='sandy@gmail.com'
            name='email'
          />
          <label className={classes.settingsFormLabel}>Password</label>
          <input
            className={classes.settingsFormInput}
            type='password'
            placeholder='Password'
            name='password'
          />
          <button className={classes.settingsSubmitButton} type='submit'>
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
/*
<div className={classes.settings}>
<div className={classes.settingsWrapper}>
  <div className={classes.settingsTitle}>
    <span className={classes.settingsUpdateTitle}>Update</span>
    <span className={classes.settingsDeleteTitle}>Delete</span>
  </div>
  <form className={classes.settingForm}>
    <label>Profile Picture</label>
    <div className={classes.settingsPP}>
      <img
        src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt=''
      />
      <label htmlFor='fileInput'>
        <i className={`${classes.settingsPPIcon} far fa-user-circle`}></i>
      </label>
      <input
        id='fileInput'
        type='file'
        style={{ display: 'none' }}
        className={classes.settingsPPInput}
      />
    </div>
    <label className={classes.settingsFormLabel}>Username</label>
    <input
      type='text'
      placeholder='sandip'
      name='name'
      className={classes.settingsFormInput}
    />
    <label className={classes.settingsFormLabel}>Email</label>
    <input
      type='email'
      placeholder='sandip@gmail.com'
      name='email'
      className={classes.settingsFormInput}
    />
    <label className={classes.settingsFormLabel}>Password</label>
    <input type='password' placeholder='Password' name='password' />
    <button className={classes.settingsSubmitButton} type='submit'>
      Update
    </button>
  </form>
</div>
<Sidebar />
</div>


*/
