import { Router } from 'express';
import userControl from '../controllers/UserController';
import OAuthUser from '../middlewares/OAuthUser';

export default class UserRouter extends Router {
  constructor() {
    super();

    /**
    * index method
    */
    // this.get('/', OAuthUser, userControl.index);
    /**
     * store method
     */
    this.post('/', OAuthUser, userControl.store);
    /**
     * show method
     */
    // this.get('/:id', OAuthUser, userControl.show);
    /**
     * update method
     */
    this.put('/:id', OAuthUser, userControl.update);
    /**
     * delete method
     */
    this.delete('/:id', OAuthUser, userControl.delete);
  }
}
