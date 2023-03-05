import { createPool, Pool } from 'mysql2/promise';

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Lethal',
  database: 'hostels',
  connectionLimit: 10, // optional
};

export const pool: Pool = createPool(mysqlConfig);
