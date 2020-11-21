import { ConnectionManager } from 'typeorm';

const connectionManager = new ConnectionManager();
//TODO:: USE env variables
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
    return await connection.connect();
  } catch (error) {
    console.log("Eror while connecting with mysql database", error);
    return null;
  }
};

export default triggerConnection;
