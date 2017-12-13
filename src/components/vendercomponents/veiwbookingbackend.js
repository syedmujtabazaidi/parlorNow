var express = require('express');
var mysql = require('mysql');
var express = require('express')
var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'parlornow'
});
var app = express();
connection.connect(function(error)
 {
    if(!!error){
        console.log('Error');
    }
    else {
        console.log('Connected');
    }

});
console.log('Enter Data Base');
app.get('/',function(req,resp)
{

connection.query("SELECT * FROM booking",function(error,rows,fields)
{
    if (!!error){
        console.log('Error in the query');
    }
    else{
        console.log('Successful query');
        console.log(rows);
    }

});
})
app.listen(1337);
