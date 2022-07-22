"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PhotoController = require('../controllers/PhotoController'); var _PhotoController2 = _interopRequireDefault(_PhotoController);
var _OAuthUser = require('../middlewares/OAuthUser'); var _OAuthUser2 = _interopRequireDefault(_OAuthUser);

 class PhotoRouter extends _express.Router {
  constructor() {
    super();
    /**
   * index method
   */
    // this.get('/', OAuthUser, photoControl.index);
    /**
     * store method
     */
    this.post('/', _OAuthUser2.default, _PhotoController2.default.store);
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
} exports.default = PhotoRouter;
