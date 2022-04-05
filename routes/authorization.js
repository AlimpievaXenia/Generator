const authorizationRouter = require('express').Router();

const { authUser, findUser } = require('../controllers/authorization');

authorizationRouter
  .route('/')
  .get(authUser)
  .post(findUser);

module.exports = authorizationRouter;
