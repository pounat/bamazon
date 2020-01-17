// Requirering npm packages
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connecting to Mysql
var password = process.env.password;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: password,
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
        console.table(res);
        buyItems();
    });
};

function buyItems() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enther Item ID you would like to purchase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many items do you wish to purchase?",
            filter: Number
        }

    ]).then(function(answers){
        var quantityNeed = answers.Quantity;
        var IDneed = answers.ID;
        purchaseOrder(IDneed, quantityNeed);
        showItems();
    });
};

function purchaseOrder(ID, numNeeded){
    connection.query("SELECT * FROM products WHERE item_id = " + ID, function(err, res){
        if(err) throw err;
        if (numNeeded <= res[0].stock_quantity){
            var totalCost = res[0].price * numNeeded;
            console.log("We have your order in stock!");
            console.log("Your total cost for " + numNeeded + " " + res[0].product_name + " is " + totalCost + "!");

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + numNeeded + " WHERE item_id = " + ID);
        } else {
            console.log("Sorry, we do not have enough " + res[0].product_name + " to continue with your order");
        };
    });
};

