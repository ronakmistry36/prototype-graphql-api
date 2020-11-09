import express from 'express';
import dotenv from 'dotenv';
import { ConnectionOptions, getConnectionManager } from 'typeorm';

import TypeORMUserRepository from './typeORM/TypeORMUserRepository';
import UserEntity from './entity/UserEntity';

// Configuration
dotenv.config();
const app = express();

const {
  PORT,
  DATABASE_NAME,
  DATABASE_USER_NAME,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_DIALECT,
} = process.env;

const connectionOptions: ConnectionOptions = {
  type: DATABASE_DIALECT as any,
  host: DATABASE_HOST as string,
  port: Number.parseFloat(DATABASE_PORT as string),
  username: DATABASE_USER_NAME as string,
  password: DATABASE_PASSWORD as string,
  database: DATABASE_NAME as string,
  synchronize: true,
};

app.listen(PORT, async () => {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create(connectionOptions);
  await connection.connect();

  // const userRepository = new TypeORMUserRepository();

  // const user:UserEntity = {
  //   id: 'first-sample-id',
  //   email: 'me@facebook.com',
  //   firstName: 'React',
  //   lastName: 'Facebook',
  // };

  // userRepository.save(user);
});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
