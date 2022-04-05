const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.authUser = (req, res) => {
  res.render('authorization');
};

exports.findUser = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ where: { email } });
  } catch {
    res
      .status(400)
      .render('error', { error: 'Пользователь с таким логином и/или паролем не существует' });
    return;
  }

  let isSameUser;
  try {
    isSameUser = await bcrypt.compare(password, user.password);
  } catch (error) {
    res
      .status(500)
      .render('error', { error: error.message });
  }

  if (!isSameUser) {
    res
      .status(400)
      .render('error', { error: 'Пользователь с таким логином и/или паролем не существует' });
    return;
  }
  req.session.user = user;
  res.redirect('/');
};
