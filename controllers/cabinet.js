const { Card } = require('../db/models');

exports.showCards = async (req, res) => {
  try {
    const cards = await Card.findAll({ raw: true });
    res.render('cabinet', { cards });
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
};
