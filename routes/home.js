const express = require('express')
const router = express.Router()
const query = require('../db/queries')

router.get('/', (req, res) => {
    console.log(req.session)
    const data = {
        title: 'Shitty Login Page',
        subtitle: 'Login Below'
    };
    res.render('home', data)
})

module.exports = router;