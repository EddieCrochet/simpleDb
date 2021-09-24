let {Pool} = require("pg");
require("dotenv").config();

let connection = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT
}

const pool = new Pool(connection);

pool.query("use "+process.env.PG_DATABASE, function(err, row){
    if(err){
        console.log("DB query error ", err);
    } else {
        console.log("query results ", rows);
    }
    
});

module.exports = connection;