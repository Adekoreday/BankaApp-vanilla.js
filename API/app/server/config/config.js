
import dotenv from 'dotenv';

dotenv.config();

export default {
    development: {
        user: 'postgres',
        host: 'localhost',
        database: 'banka',
        password: '',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000,
    },
    test: {
        username: 'postgres',
        password: '',
        database: 'travis',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        host: 'ec2-50-19-109-120.compute-1.amazonaws.com',
        database: 'dfukr1ebfdo15c',
        username: 'lkmslfjflyohss',
        port: 5432,
        password: '7f79177aa28941eccfee5ca210531d72e1a410df89d71225fb4ca5a6c97e2e9c',
        dialect: 'postgres',
        sslmode: require,
        define: {
            timestamps: false,
        },
    },
};