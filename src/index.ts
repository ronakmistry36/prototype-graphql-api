import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';

dotenv.config();
const app = express();
app.use(express.json());

const { PORT } = process.env;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: {},
    graphiql: true
  })
)

app.listen(PORT, async() => {
  console.log("App is running on port::", PORT)
});

app.get('/',  (request, response) => {
  response.send('HMW - Backend');
});
