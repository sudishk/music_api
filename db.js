const mysql = require("mysql2/promise");
const poolConfig = {
    host: "217.21.87.103",
    user: "u205680228_sudishkumar",
    password: "Sudish8021@Db",
    database: "u205680228_eduDev",
    port: process.env.DB_PORT,
    waitForConnections: true, // If connections are maxed out, queue new requests
    connectionLimit: 10,     // Max number of simultaneous connections (adjust as needed)
    queueLimit: 0,           // No limit on the queue for waiting requests
    connectTimeout: 20000
};

const db = mysql.createPool(poolConfig);

module.exports = db;