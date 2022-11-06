require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const log = require('debug')('app');

const config = require('./config');
const database = require('./database');
const passportConfig = require('./passport');

const app = express();

database(config.mongoUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60,
    },
  })
);

passportConfig(app);

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authorRoutes = require('./routes/authorRoutes');

app.get('/', (req, res) => {
  return res.json({ status: true });
});

app.use('/api/auth', authRoutes());
app.use('/api/blogs', blogRoutes());
app.use('/api/authors', authorRoutes());

module.exports = app.listen(config.port, () =>
  log('Server is Running on port ' + config.port)
);

// module.exports = app;
