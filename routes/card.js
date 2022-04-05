const cardRouter = require('express').Router();
const { newCard, createCard } = require('../controllers/card');

cardRouter
  .route('/')
  .get(newCard)
  .post(createCard);

module.exports = cardRouter;
