import express from 'express';
// @ts-ignore
import dotenv from 'dotenv';
import "reflect-metadata";
import {ApolloServer} from 'apollo-server';
import {createConnection} from "typeorm";
import {buildSchema} from "type-graphql";
import {UserResolver} from "./graphQl/UserResolver";


dotenv.config();
const app = express();
app.use(express.json());

const { PORT } = process.env;

const initializeApp = async () => {
  const connection = await createConnection();
  const schema = await buildSchema({ resolvers: [ UserResolver ]});
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.listen(PORT);
  console.log("App is running on port::", PORT);
};

initializeApp();
