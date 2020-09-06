var express = require('express');
var app = express();

const db = require("./db.js"); // importing the db config

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get("/employees", async (req, res) => {
    const employees = await db("employees"); // making a query to get all todos
    res.json({ employees });
});

var server = app.listen(3000, function () {
    console.log('Server running on port 3000');
});