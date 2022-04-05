exports.finalSession = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .render('error', { error: error.message });
      return;
    }
    res
      .clearCookie(res.app.locals.sessionCookie)
      .redirect('/');
  });
};
