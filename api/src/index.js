import express from 'express';
import connectDB from './utils/connectDB';

import authApi from './apis/auth';
import userApi from './apis/users';
import postApi from './apis/posts';
import categoryApi from './apis/categories';

const app = express();

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.use('/api/auth', authApi);
app.use('/api/user', userApi);
app.use('/api/post', postApi);
app.use('/api/category', categoryApi);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('listening to port on ', port));
