import mssql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: process.env.MSSQL_SERVER,
  database: process.env.MSSQL_DATABASE,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

async function connection() {
  try {
    await mssql.connect(config);
    console.log('Database Connected!');
    return mssql;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default connection;
