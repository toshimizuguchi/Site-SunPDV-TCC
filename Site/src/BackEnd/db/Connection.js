import { Connection, Request } from 'tedious';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: process.env.AZURE_SQL_SERVER,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.AZURE_SQL_USER,
      password: process.env.AZURE_SQL_PASSWORD
    }
  },
  options: {
    database: process.env.AZURE_SQL_DATABASE,
    encrypt: true // SSL obrigatório para Azure
  }
};

export const executeQuery = (sql) => {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);
    const results = [];

    connection.on('connect', (err) => {
      if (err) reject(err);
      
      const request = new Request(sql, (err) => {
        if (err) reject(err);
      });

      request.on('row', columns => {
        const row = {};
        columns.forEach(column => {
          row[column.metadata.colName] = column.value;
        });
        results.push(row);
      });

      request.on('requestCompleted', () => {
        connection.close();
        resolve(results);
      });

      connection.execSql(request);
    });

    connection.connect();
  });
};