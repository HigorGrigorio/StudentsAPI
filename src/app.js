import Express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import StudentRouter from './routes/StudentRouter';
import UserRouter from './routes/UserRouter';
import TokenRouter from './routes/TokenRouter';
import PhotoRouter from './routes/PhotoRouter';

import './database';

// load .env configs
dotenv.config();

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

    // configure a static path
    this.use('/images', Express.static(resolve(__dirname, '..', 'dist', 'uploads', 'images')));
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
