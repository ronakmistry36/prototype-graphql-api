import * as express from 'express';

const app = express();

const PORT = 8001;

app.listen(PORT, async () => {
  console.log("App is running on port::", PORT);
});

app.get('/', (_request, response) => {
  response.send('Welcome');
});
