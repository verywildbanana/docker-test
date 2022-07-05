const mysql = require("mysql2");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'sora',
    password: 'password',
    database: 'myapp',
    port: '3306'
    
});

exports.pool = pool;