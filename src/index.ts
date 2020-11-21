import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

const { PORT } = process.env;

app.listen(PORT, async() => {
  console.log("App is running on port::", PORT)
});

app.get('/',  (request, response) => {
  response.send('HMW - Backend');
});
