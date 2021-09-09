
const express = require('express')
const app = express()
const mysql = require('mysql')

// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';

const port = process.env.PORT || 3000

// Connection Details
// const connection = mysql.createConnection({
//   host: 'eu-cdbr-west-01.cleardb.com',
//   user: 'b864459d35e3fd',
//   password: '6a880cda',
//   database: 'heroku_4eb7a8ff5383ffb'
// })

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbAdmin:5EBi5shIIOry6pfa@cluster0.ca8lk.mongodb.net/blog?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)


// const connectDB = async () => {
//     try {
//       await mongoose.connect('mongodb+srv://dbAdmin:5EBi5shIIOry6pfa@cluster0.ca8lk.mongodb.net/blog?retryWrites=true&w=majority', {
//         useNewUrlParser: true,
//         useFindAndModify: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//       });
  
//       console.log("MongoDB Connection Success 👍");
//     } catch (error) {
//       console.log("MongoDB Connection Failed 💥");
//       process.exit(1);
//     }
//   };
//   connectDB()

// View engine
app.set('view engine', 'ejs')

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