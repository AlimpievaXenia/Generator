const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.regUser = (req, res) => {
  res.render('registration');
};

exports.newUser = async (req, res) => {
  const { name, email, password } = req.body;

  let hash;
  try {
    hash = await bcrypt.hash(password, 10);
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  try {
    await User.create({
      name,
      email,
      password: hash,
    });
    res.redirect('/authorization');
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }
};
