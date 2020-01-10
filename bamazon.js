// Requirering npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connecting to Mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "APr0424!!!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    showItems();
});


// Function to show everything
function showItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
};