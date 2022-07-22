import Express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import Cors from 'cors';
import Helmet from 'helmet';
import StudentRouter from './routes/StudentRouter';
import UserRouter from './routes/UserRouter';
import TokenRouter from './routes/TokenRouter';
import PhotoRouter from './routes/PhotoRouter';

import './database';

// load .env configs
dotenv.config();

const whiteList = [
  'http://34.151.233.122',
  'http://localhost:3000',
];

const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App extends Express {
  constructor() {
    // initialize express instance
    super();

    /**
     * load middlewares
     */
    // express middlewares configuration
    this.use(Express.urlencoded({ extended: true }));
    this.use(Express.json());

    /**
     * configure CORS
     */
    this.use(Cors(corsOption));
    this.use(Helmet());

    // configure a static path
    this.use('/images', Express.static(resolve(__dirname, 'uploads', 'images')));

    /**
     * load routes
     */
    this.use('/students', new StudentRouter());
    this.use('/users', new UserRouter());
    this.use('/tokens', new TokenRouter());
    this.use('/photos', new PhotoRouter());
  }
}

export default new App();
