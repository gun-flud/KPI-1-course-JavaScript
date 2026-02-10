const express = require('express');
const path = require('path');

const pathUtilroot = require('../util/path');
const router = express.Router();


router.get('/add', (req, res, next) => {
    console.log('2nd middleware');
    //res.send('<body><form action="/message" method="POST"><input type="text" name="testInput"><button type="submit">Submit</button></form></body>');
    // res.sendFile(path.join(__dirname, '..', 'views', 'add.html'));
    res.sendFile(path.join(pathUtilroot, 'views', 'add.html'));
});

router.post('/message', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});



module.exports = router;