const express = require('express');

const routes = express.Router();
const Insta = require('./insta');


routes.get('/', (req, res) => res.status(200).json({ msg: 'hello world' }));
routes.use('/u', Insta);
module.exports = routes;