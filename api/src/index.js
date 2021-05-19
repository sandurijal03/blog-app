import express from 'express';
import multer from 'multer';

import connectDB from './utils/connectDB';
import authApi from './apis/auth';
import userApi from './apis/users';
import postApi from './apis/posts';
import categoryApi from './apis/categories';

const app = express();

connectDB();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('file has been uploaded');
});

app.use('/api/auth', authApi);
app.use('/api/user', userApi);
app.use('/api/post', postApi);
app.use('/api/category', categoryApi);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('listening to port on ', port));
