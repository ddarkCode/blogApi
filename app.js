import { config } from 'dotenv';
config();

import express from 'express';
import session from 'express-session';
import rateLimit from 'express-rate-limit';
import React from 'react';
import { matchRoutes } from 'react-router-config';

import envConfig from './config';
import database from './database';
import { passportConfig } from './passport';
import httpLogger from './logger/httpLogger';
import logger from './logger/logger';
import { renderer } from './helpers/renderer';

import { authRoutes } from './routes/authRoutes';
import { blogRoutes } from './routes/blogRoutes';
import { authorRoutes } from './routes/authorRoutes';
import { serverCreateStoreKit } from './helpers/createStore';
import { Routes } from './views/Routes';

const app = express();

database(envConfig.mongoUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(httpLogger);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 60,
    },
  })
);

passportConfig(app);

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests, please try again later.',
  statusCode: 429,
});

app.use('/api', limiter);
app.use('/api/auth', authRoutes());
app.use('/api/blogs', blogRoutes());
app.use('/api/authors', authorRoutes());

app.get('*', (req, res) => {
  const store = serverCreateStoreKit();

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData
        ? route.loadData(store, req.path.split('/')[3])
        : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    logger.info('Server Root App Store Get State: ', store.getState());
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    return res.send(content);
  });
});

export default app.listen(envConfig.port, () =>
  logger.info('Server is Running on port ' + envConfig.port)
);
