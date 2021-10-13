const {Client} = require ('pg');

const config = {
 user: 'postgres',
 host: 'localhost',
 database: 'jeans',
 password: '',
 port: 5432
};

const client = new Client(config);

