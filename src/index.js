import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './modules';

import db from './db/models';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Trendi API' });
});

app.use((err, req, res) => {
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {},
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // try {
  //   await db.sequelize.sync();
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
});
