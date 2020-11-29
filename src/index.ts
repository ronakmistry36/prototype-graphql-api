import * as express from 'express';
import 'dotenv/config';
import typeORMConnection from "./typeORM/TypeORMConnection";
import {ApolloServer} from "apollo-server-express";

import schema from "./graphQl";

const app = express();

const {PORT} = process.env;

const apolloServer = new ApolloServer({schema, playground: true });

apolloServer.applyMiddleware({ app, path: '/graphql'});

app.listen(PORT,   async () => {
  await typeORMConnection();
  console.log("App is running on port::", PORT);
});
