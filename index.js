require('dotenv').config();
const express = require('express');

const app = express();
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const registrationRouter = require('./routes/registration');
const authorizationRouter = require('./routes/authorization');
const logoutRouter = require('./routes/logout');
const cardRouter = require('./routes/card');
const cabinetRouter = require('./routes/cabinet');
const getSessionUser = require('./middleware/getSessionUser');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.locals.sessionCookie = 'user_id';

const sessionConfig = {
  store: new FileStore(),
  name: app.locals.sessionCookie,
  secret: process.env.SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(getSessionUser);

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/registration', registrationRouter);
app.use('/authorization', authorizationRouter);
app.use('/logout', logoutRouter);
app.use('/new', cardRouter);
app.use('/cabinet', cabinetRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;
