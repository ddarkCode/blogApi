import { config } from 'dotenv';
config();

const envConfig = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/blogApi',
};

export default envConfig;
