const express = require('express');

const router = express.Router();

router.get('/test', (req, res, next) => {
    console.log('2nd middleware');
    res.send('<h1>test page</h1>');
});

router.get('/', (req, res, next) => {
    console.log('1st middleware');
    res.send('<h1>Express server works!</h1>');
});

module.exports = router;
