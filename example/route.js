let express = require('express');

let router = express.Router();

let controller = require('./controller');

// POST  /record -body{word: "Test"}
// will add the word to our table in the db
router.post("/record", controller.addWord)

// GET /record
// wil list all of the prev recorded words
router.get("/record", function(req, res){
    console.log("Inside the GET /record");
    res.json("Place holder");
})

module.exports = router;