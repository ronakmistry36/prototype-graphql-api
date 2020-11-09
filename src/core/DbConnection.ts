import { createConnection, ConnectionOptions, Connection } from 'typeorm';

const {
  DATABASE_NAME,
  DATABASE_USER_NAME,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_DIALECT,
} = process.env;

const connectionOptions: ConnectionOptions = {
  type: DATABASE_DIALECT as any,
  host: DATABASE_HOST as string,
  port: Number.parseFloat(DATABASE_PORT as string),
  username: DATABASE_USER_NAME as string,
  password: DATABASE_PASSWORD as string,
  database: DATABASE_NAME as string,
  synchronize: true,
};

export default async () => {
  const connection: Connection = await createConnection(connectionOptions);
  return connection;
};
