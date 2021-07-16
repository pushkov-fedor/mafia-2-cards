import * as process from 'process';

export const BASE_URL =
  (process.env.BACKEND_URL as string) || 'http://localhost:3000/api/';
