import { Router } from 'express';
import studentControl from '../controllers/StudentController';
import OAuthUser from '../middlewares/OAuthUser';

export default class StudentRouter extends Router {
  constructor() {
    super();
    /**
   * index method
   */
    this.get('/', OAuthUser, studentControl.index);
    /**
     * store method
     */
    this.post('/', OAuthUser, studentControl.store);
    /**
     * show method
     */
    this.get('/:id', OAuthUser, studentControl.show);
    /**
     * update method
     */
    this.put('/:id', OAuthUser, studentControl.update);
    /**
     * delete method
     */
    this.delete('/:id', OAuthUser, studentControl.delete);
  }
}
