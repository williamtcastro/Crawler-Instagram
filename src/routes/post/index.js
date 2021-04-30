const express = require('express');

const routes = express.Router();

const InstaPostController = require('../../controllers/InstaPostController');

routes.get('/:post', InstaPostController.index);
routes.get('/:post/comments', InstaPostController.comments);
module.exports = routes;
