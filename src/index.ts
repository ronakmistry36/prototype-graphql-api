import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import TypeORMUserEntitySchema from './typeORM/TypeORMUserRepository';
import UserEntity from './entity/UserEntity';

// Configuration
dotenv.config();
const app = express();

const { PORT } = process.env;

app.listen(PORT, async () => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(TypeORMUserEntitySchema);
    userRepository.save({
    });
  } catch (error) {
    // console.log(error);
  }

  // const userRepository = new TypeORMUserRepository();
  // userRepository.save(user);
});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
