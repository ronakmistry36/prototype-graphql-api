import { ConnectionManager } from 'typeorm';

const connectionManager = new ConnectionManager();
const connection = connectionManager.create({
  type: "mysql",
  host: "localhost",
  port: 3399,
  username: "root",
  password: "password",
  database: "prototype-graphql"
});

const triggerConnection = async () => {
  try {
    await connection.connect();
  } catch (error) {
    console.log(error);
  }
};

export default triggerConnection;
