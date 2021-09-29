let express = require('express');

let router = express.Router();

let controller = require('../controller/words');

let auth = require("../middleware/auth");

// POST  /record -body{word: "Test"}
// will add the word to our table in the db
router.post("/record", auth.loginCheck, controller.addWord);

// GET /record
// wil list all of the prev recorded words
// following someone who has WORDS in the database as a table
router.get("/record", controller.getWords);

module.exports = router;