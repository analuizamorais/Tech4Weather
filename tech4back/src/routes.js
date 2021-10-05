const router = require('express').Router();
const { apiWeather } = require('./apiWeather');

router
    .get('/', (req, res) => {
        res.status(200).json('teste');
    })

module.exports = { router };