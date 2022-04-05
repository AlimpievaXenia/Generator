const registrationRouter = require('express').Router();

const { regUser, newUser } = require('../controllers/registration');

registrationRouter
  .route('/')
  .get(regUser)
  .post(newUser);

module.exports = registrationRouter;
