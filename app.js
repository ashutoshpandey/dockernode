var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/test', function (req, res) {
    res.send('This is test API!');
});

app.get("/employees", async (req, res) => {
    const db = require("./db.js"); // importing the db config

    const employees = await db("employees"); // making a query to get all todos

    res.json({ employees });
});

app.get("/employees/create", async (req, res) => {
    const db = require("./db.js"); // importing the db config

    const result = await db("employees").insert({ name: 'ashutosh' });

    res.json({ result });
});

console.log('App loaded');

var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});


