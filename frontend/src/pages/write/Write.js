import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import classes from './Write.module.css';

const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  console.log(user);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      username: user.username,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await fetch('/upload', {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data',
          },
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await fetch('/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      const res = await response.json();
      // console.log(res);
      window.location.replace('/post/' + res._id);
    } catch (err) {}
  };

  return (
    <div className={classes.write}>
      {file && (
        <img
          className={classes.writeImg}
          src={URL.createObjectURL(file)}
          alt=''
        />
      )}
      <form className={classes.writeForm} onSubmit={onSubmit}>
        <div className={classes.writeFormGroup}>
          <label htmlFor='fileInput'>
            <i className={`${classes.writeIcon}  fas fa-plus`}></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='title'
            className={classes.writeInput}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.writeFormGroup}>
          <textarea
            className={`${classes.writeInput} ${classes.writeText}`}
            placeholder='Tell your story...'
            cols='30'
            rows='1'
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className={classes.writeSubmit} type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
