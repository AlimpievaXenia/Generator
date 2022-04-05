const { Card } = require('../db/models');

exports.newCard = (req, res) => {
  res.render('new');
};

exports.createCard = async (req, res) => {
  const {
    type, activity, participants,
  } = req.body;
  try {
    await Card.create({
      userId: req.session.user.id,
      type,
      activity,
      participants,
      isCreateByUser: true,
    });
    res.redirect('/new');
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
};
