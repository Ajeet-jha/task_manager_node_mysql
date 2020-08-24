const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

//create database connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'task_manager'
});

//connect to database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(JSON.stringify({ "status": 200, "error": null, "response": "Check Postman !!" }));
});

app.listen(process.env.PORT || 4000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 4000}`);
});