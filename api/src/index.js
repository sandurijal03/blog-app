import express from 'express';
import connectDB from './utils/connectDB';

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('listening to port on ', port));
