var mysql =require ('mysql');
var connection;
console.log('dude')
if (process.env.JAWSDB_URL) {
    console.log("process.env.JAWSDB_URL", process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log('local')
    connection = mysql.createConnection({
    host: "localhost",
    port:"8889",
    user: "root",
    password:"root",
    database: "burger_db"   
    });
};

connection.connect();
module.exports = connection;