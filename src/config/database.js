import dotenv from 'dotenv';

dotenv.config();
const { DATABASE_DIALECT, DATABASE_URL } = process.env;

const defaultConfig = {
  databaseUrl: DATABASE_URL,
  dialect: DATABASE_DIALECT || 'postgres',
  use_env_variable: 'DATABASE_URL',
  logging: false,
};

const database = {
  development: {
    ...defaultConfig,
  },
  test: {
    ...defaultConfig,
  },
  staging: {
    ...defaultConfig,
  },
  production: {
    ...defaultConfig,
  },
};

export default database;
