const express = require('express');
const router = express.Router();
const query = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//post request to database to login

router.post('/', (req, res, next) => {
    let userData = {
        username: req.body.username,
        password: req.body.password
    }
    query.getUser(userData)
        .then((data) => {
            req.session.user = data[0].username
            console.log(req.session)
            res.render('user', {username: data[0].username})
        })
   
})

module.exports = router