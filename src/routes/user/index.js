const express = require('express');

const routes = express.Router();

const InstaUserController = require('../../controllers/InstaUserController');

routes.get('/:user', InstaUserController.index);
routes.get('/:user/info', InstaUserController.info);
routes.get('/:user/posts', InstaUserController.posts);

module.exports = routes;
