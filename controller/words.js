const connection = require("../db/db");

let addWord = function(req, res) {
    console.log("in the addWord function");
    let word = req.body.word;


    // get the word from the request

    // send the word as an insert statement to the db

    let sql = `insert into words(word) values ('${word}');`

    connection.query(sql, function(err, rows){
        if(err){
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });

    // return a response of 204 if query is successful

    // return a response of 500 if the query fails
}

let getWords = function(req, res){
    console.log("GET getWords()");

    let sql = 'select * from users;';

    connection.query(sql, function(err, rows){
        if(err){
            console.log("WHoopsie doodle...", err);
            res.sendStatus(500);
        } else {
            // why return this instead of rows???
            let wordArray = rows.map(function(rows){
                return rows.word;
            });
            res.json(wordArray);
        }
    })
}

module.exports = {addWord, getWords};


// for get
// issue query: select word from words
// process resuults
// iff err r4es bak w 500 on res
// if no err
//      1. instantiate empty array
//      2. loop query results and add every word that comes back to arrray
//      3. send array back on response