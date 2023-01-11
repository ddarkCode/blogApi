import { config } from 'dotenv';
config();

const envConfig = {
  port: process.env.PORT || 4040,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/blogApi',
  host: process.env.HOST || 'localhost',
};

export default envConfig;
