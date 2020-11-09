import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Configuration
dotenv.config();
const app = express();

export const {
  PORT,
  DATABASE_NAME, 
  DATABASE_USER_NAME, 
  DATABASE_PASSWORD, 
  DATABASE_HOTS, 
  DATABASE_PORT, 
  DATABASE_DIALECT 
} = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME as string, 
  DATABASE_USER_NAME as string, 
  DATABASE_PASSWORD as string, 
  {
    host: 'localhost',
    port: 8006,
    dialect: 'mysql'
  }
);


app.listen(PORT, () => {});

app.get('/', (request, response) => {
  response.send('HMW - Backend');
});
