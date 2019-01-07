// Import MySQL connection.
var connection = require("./connection.js");

// This function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string has spaces, add quotations.
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {burger_name: 'Cheese burger'} => ["burger_name=Cheese burger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(vals, cb) {
    var queryString = `INSERT INTO burgers(burger_name) VALUES ('${vals}')`
    
    
    console.log(queryString);

    connection.query(queryString,function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  create: function(vals, cb) {
    var queryString = `INSERT INTO burgers(burger_name) VALUES ?`


    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(vals, cb) {
    var queryString = `UPDATE burgers SET devoured = true WHERE id = '${vals}'`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, id, cb) {
    var queryString = "DELETE FROM ?? WHERE id= ?";

    console.log(queryString);
    connection.query(queryString, [table, id], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
