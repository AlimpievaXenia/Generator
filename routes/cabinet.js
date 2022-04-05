const cabinetRouter = require('express').Router();
const { showCards } = require('../controllers/cabinet');

cabinetRouter
  .route('/')
  .get(showCards);

module.exports = cabinetRouter;
