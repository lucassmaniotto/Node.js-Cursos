require('dotenv').config();

module.exports = {
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true,
    trustServerCertificate: true,
  },
  server: process.env.MSSQL_SERVER,
  database: process.env.MSSQL_DATABASE,
  username: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  port: 1433,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
