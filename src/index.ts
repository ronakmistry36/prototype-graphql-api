import express from 'express';
import dotenv from 'dotenv';
import "reflect-metadata";
import {ApolloServer} from "apollo-server-express";
import schema from './schema';


dotenv.config();
const app = express();
app.use(express.json());

const { PORT } = process.env;

const apolloServer = new ApolloServer({ schema });

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, async() => {
  console.log("App is running on port::", PORT)
});

app.get('/',  (request, response) => {
  response.send('HMW - Backend');
});

