const mongoose = require('mongoose');
const log = require('debug')('app:database');

module.exports = (mongooseUrl) => {
  try {
    mongoose.connect(mongooseUrl, () => {
      log('Database connected successfully');
    });
  } catch (err) {
    log(err);
  }
};
