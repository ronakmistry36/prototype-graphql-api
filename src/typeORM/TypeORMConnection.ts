import {createConnection} from "typeorm";
import ProjectEntity from "./entity/ProjectEntity";

const typeORMConnection = async () => {
  try {
    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3399,
      username: "root",
      password: "password",
      database: "prototype-graphql",
      entities: [
        ProjectEntity
      ]
    });
    console.log("DB Connected::");
  } catch (error) {
    console.log("DB Connection error::", error);
  }
};

export default typeORMConnection;
