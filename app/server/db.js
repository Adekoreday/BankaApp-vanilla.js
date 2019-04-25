import pg from 'pg';
import dotenv from 'dotenv';
import config from './config/config';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const configurations = config[env];

const { Pool } = pg;
let pool;

if (process.env.NODE_ENV === 'TEST') {
    pool = new Pool({
        connectionString: process.env.TESTDB,
    });
    console.log("entered test db");
}
if (process.env.NODE_ENV === 'production') {
    pool = new Pool({
        connectionString: process.env.productionDB,
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
