import express from 'express';
import dotenv from 'dotenv';

const { PORT } = process.env;
const app = express();

dotenv.config();

app.listen(PORT, () => {});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
