import cors from 'cors';
import express from 'express';
import { connectPostgresDB } from '../database/postgres';

const app = express();

app.use(cors());

(async () => {
  await connectPostgresDB();
})();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(process.env.SERVER_PORT) || 3001;
export default app;
