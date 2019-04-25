import pg from 'pg';
import dotenv from 'dotenv';
import config from './config/config';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const configurations = config[env];
const TESTDB = 'postgres://lchszjre:KkYtJDx6DxoYQvkWUTgK-bb9ua2Wn0cg@baasu.db.elephantsql.com:5432/lchszjre';
const productionDB = 'postgres://xibqsmju:ITur0M2dh7v9TFVd-fWe6zJ7ovGoFuru@isilo.db.elephantsql.com:5432/xibqsmju';
const { Pool } = pg;
let pool;

if (process.env.NODE_ENV === 'TEST') {
    pool = new Pool({
        connectionString: TESTDB,
    });
}
if (process.env.NODE_ENV === 'production') {
    pool = new Pool({
        connectionString: productionDB,
    });
}
if (process.env.NODE_ENV === 'development') {
    pool = new Pool(configurations);
}

pool.on('error', (err) => {
    console.log('failed to connect with the data base', err);
});
const db = {
    querydb: (query, cb) => pool.query(query, cb),
}
export default db;
