const express = require('express');

const router = express.Router();


router.get('/add', (req, res, next) => {
    console.log('2nd middleware');
    res.send('<body><form action="/message" method="POST"><input type="text" name="testInput"><button type="submit">Submit</button></form></body>');
});

router.post('/message', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});



module.exports = router;