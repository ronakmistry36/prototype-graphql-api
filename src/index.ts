import * as express from 'express';
import 'dotenv/config';

const app = express();

const {PORT} = process.env;

app.listen(PORT, async () => {
  console.log("App is running on port::", PORT);
});

app.get('/', (_request, response) => {
  response.send('Welcome');
});
