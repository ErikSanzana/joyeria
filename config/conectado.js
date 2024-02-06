import pg  from 'pg';
import { db } from './postgress.js';

export const pool = new pg.Pool(db);


pool.on("connect", () => console.log("todo bien ,todo correcto"))