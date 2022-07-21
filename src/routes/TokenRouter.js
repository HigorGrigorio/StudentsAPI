import { Router } from 'express';
import tokenControl from '../controllers/TokenController';

export default class TokenRouter extends Router {
  constructor() {
    super();
    /**
     * store method
     */
    this.post('/', tokenControl.store);
  }
}
