var express = require('express');
var mysql = require('mysql');
var express = require('express');
var cors = require('cors');
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
app.use(cors());
app.get('/',function(req,res)
{

connection.query("SELECT * FROM booking",function(error,rows,fields)
{
    if (!!error){
        console.log('Error in the query');
    }
    else{
        console.log('Successful query');
        console.log(rows);
        res.status(200).json({
            success: true,
            message: 'Fetched Successfully.',
            data:rows,
          });
    }

});
})
app.listen(1337);
