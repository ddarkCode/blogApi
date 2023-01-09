import mongoose from 'mongoose';

import logger from '../logger/logger';

export default async (mongooseUrl) => {
  try {
    const connectionString = await mongoose.connect(
      mongooseUrl || 'mongodb://localhost:27017'
    );

    logger.info('  Database connection was successfully established');
  } catch (err) {
    logger.error(err);
  }
};
