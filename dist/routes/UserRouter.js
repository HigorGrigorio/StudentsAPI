"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _OAuthUser = require('../middlewares/OAuthUser'); var _OAuthUser2 = _interopRequireDefault(_OAuthUser);

 class UserRouter extends _express.Router {
  constructor() {
    super();

    /**
    * index method
    */
    // this.get('/', OAuthUser, userControl.index);
    /**
     * store method
     */
    this.post('/', _OAuthUser2.default, _UserController2.default.store);
    /**
     * show method
     */
    // this.get('/:id', OAuthUser, userControl.show);
    /**
     * update method
     */
    this.put('/:id', _OAuthUser2.default, _UserController2.default.update);
    /**
     * delete method
     */
    this.delete('/:id', _OAuthUser2.default, _UserController2.default.delete);
  }
} exports.default = UserRouter;
