// let mysql = require("mysql");
// require("dotenv").config();

// let connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     port: process.env.MYSQL_PORT
// })

// connection.connect();

// connection.query("use "+process.env.MYSQL_DATABASE, function(err, row){
//     if(err){
//         console.log("DB query error ", err);
//     } else {
//         console.log("query results ", rows);
//     }
    
// });

// module.exports = connection;