import * as express from 'express';
import 'dotenv/config';
import ProjectRepository from "./typeORM/repository/ProjectRepository";
import typeORMConnection from "./typeORM/TypeORMConnection";

const app = express();

const {PORT} = process.env;

app.listen(PORT,   async () => {
  await typeORMConnection();
  console.log("App is running on port::", PORT);
});

app.get('/', async (_request, response) => {
  const projectRepository = new ProjectRepository();
  const projects = await projectRepository.findAll();
  response.send(projects);
});
