const express = require('express');

const routes = express.Router();
const User = require('./user');
const Post = require('./post');

routes.get('/', (req, res) => res.status(200).json({ msg: 'hello world' }));
routes.use('/u', User);
routes.use('/p', Post);
module.exports = routes;