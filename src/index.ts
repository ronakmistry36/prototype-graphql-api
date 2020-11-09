import express from 'express';
import dotenv from 'dotenv';

// Configuration
dotenv.config();
const app = express();

const { PORT } = process.env;

app.listen(PORT, () => {});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
