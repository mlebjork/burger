var mysql =require ('mysql');
var connection;
if (process.env.JAWSDB_URL) {
    console.log("process.env.JAWSDB_URL", process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database: "burger_db"   
    });
};

connection.connect();
module.exports = connection;