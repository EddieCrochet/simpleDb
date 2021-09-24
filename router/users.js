let express = require("express");

let router = express.Router();

let controller = require('../controller/users')

// create users
//POST /users - body{fullname: email}
router.post("/users", controller.createUser);

//update 
//PUT /users/:id
//PUT /users/password/:id

//list users
// GET users
router.get('/users', controller.listUsers);


// delete user
// DELETE users:id

module.exports = router;

