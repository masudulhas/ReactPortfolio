/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

// host: crockett.highstone.biz (default port)
// l: portfolio
// p: Portfolio123

const express = require('express');
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'comment_api'
});

const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

const student = {
  firstname: "Lisa",
  lastname: "LaFlamme",
  age: 21,
  classes: ["street", "dancehall", "balett"]
  };

  const teacher = {
    firstname: "Adrienne",
    lastname: "Picard",
    age: 21,
    classes: ["street", "dancehall", "balett"]
    };

    // todo add classes


const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes


app.get('/student', function (req, res) {
    res.json(student);
});

app.get('/teacher', function (req, res) {
  res.json(teacher);
});

app.get('/user_info', function (req, res) {
  connection.query('SELECT * FROM `user_info`', [], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)

  res.json(results);

});
});

app.post('/user_info', function (req, res) {
  var query = "INSERT INTO ??(??,??) VALUES (?,?)";
  var inserts = ['user_info', 'user_name', 'user_comment', req.body.user_name, req.body.user_comment];
  sql = mysql.format(query, inserts);
  query = mysql.format(query,inserts);
  connection.query(query,function(err,rows){
    if(err) {
        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    } else {
        res.json({"Error" : false, "Message" : "Comment Added !"});
    }
});
});
// todo add classes endpoint

console.log(`App listening on port ${port}`);
