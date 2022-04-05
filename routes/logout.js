const logoutRouter = require('express').Router();
const { finalSession } = require('../controllers/logout');

logoutRouter
  .route('/')
  .get(finalSession);

module.exports = logoutRouter;
