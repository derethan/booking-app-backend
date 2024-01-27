/***************************************
 *  MySQL Database Connection
 * ************************************/

const mysql = require('mysql2'); //For MySQL database connection

require('dotenv').config(); //For environment variables

const util = require('util'); //For async/await

//Create a connection to the database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,

    database: process.env.DATABASE_NAME,

    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

//Connect to the database
db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MySQL database connected successfully.");
    }
});

//Promisify the query method
db.query = util.promisify(db.query);

module.exports = db;