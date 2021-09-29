let loginCheck = function (req, res, next){
    console.log("inside login check");
    //res.sendStatus(401).send("No!");

    // get the JWT token from the header
    // check that the token is valid and has not been messed with
    // 

    // then send everyone through
    next();
}

module.exports = {loginCheck};