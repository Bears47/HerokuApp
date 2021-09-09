
const express = require('express')
const app = express()
const mysql = require('mysql')

// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';

const port = process.env.PORT || 3000

// View engine
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('pages/index');
});

// Render Home Page
// app.get('/', function (req, res) {

//   connection.query('SELECT * FROM user WHERE id = "1"', (error, rows) => {
//     if (error) throw error;

//     if (!error) {
//       console.log(rows)
//       res.render('pages/index', { rows })
//     }

//   })

// })

app.listen(port)
console.log(`Server is listening on port ${port}`);