import { Router } from 'express';
import photoControl from '../controllers/PhotoController';
import OAuthUser from '../middlewares/OAuthUser';

export default class PhotoRouter extends Router {
  constructor() {
    super();
    /**
   * index method
   */
    // this.get('/', OAuthUser, photoControl.index);
    /**
     * store method
     */
    this.post('/', OAuthUser, photoControl.store);
    /**
     * show method
     */
    // this.get('/:id', OAuthUser, photoControl.show);
    /**
     * update method
     */
    // this.put('/:id', OAuthUser, photoControl.update);
    /**
     * delete method
     */
    // this.delete('/:id', OAuthUser, photoControl.delete);
  }
}
