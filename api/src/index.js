import express from 'express';
import connectDB from './utils/connectDB';

import authApi from './apis/auth';

const app = express();

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.use('/api/auth', authApi);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('listening to port on ', port));
