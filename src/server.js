import dotenv from 'dotenv';
import app from './app';

// load .env configs
dotenv.config();

const { PORT } = process.env;

app.listen(PORT);
