let express = require('express');

let router = express.Router();

let controller = require('./controller');

// POST  /record -body{word: "Test"}
// will add the word to our table in the db
router.post("/record", controller.addWord);

// GET /record
// wil list all of the prev recorded words
router.get("/record", controller.getWords);

module.exports = router;