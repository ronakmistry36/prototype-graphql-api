import express from 'express';
import dotenv from 'dotenv';
import triggerConnection from './typeORM/index';
import TypORMUserRepository from "./typeORM/repository/TypORMUserRepository";

dotenv.config();
const app = express();
app.use(express.json());

const { PORT } = process.env;

app.listen(PORT,   () => {
  triggerConnection();
  console.log("App is running on port::", PORT)
});

app.get('/', async (request, response) => {



  await TypORMUserRepository.save({
    id: 'sample-id',
    email: 'ronakmistry36@gmail.com',
    firstName: 'Ronak',
    lastName: 'Mistry'
  })
  console.log("data saved...");
  response.send('HMW - Backend');
});
