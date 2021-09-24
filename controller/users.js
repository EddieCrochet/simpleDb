let db = require('../db/db');

let createUser = function(req, res){
    console.log("post users - createuser");

    let username = req.body.username;
    let password = req.body.password;
    let fullname = req.body.fullname;
    let email = req.body.email;

    let sql = 
    'insert into appUsers (username, fullname, email, password) values ( $1, $2, $3, $4)';

    let params = [
        username, fullname, email, password
    ];

    db.query(sql, params, function(err ,rows){
        if(err){
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    })

};

let listUsers = function(req, res){
    res.json("get users - listUser");
}

module.exports = {createUser, listUsers}