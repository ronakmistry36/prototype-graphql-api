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
    await connection.connect();
    console.log("Mysql database connected successfully....");
  } catch (error) {
    console.log(error);
    console.log("Error while connecting with mysql database", error);
  }
};

export default triggerConnection;
