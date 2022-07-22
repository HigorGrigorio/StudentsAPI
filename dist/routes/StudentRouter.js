"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StudentController = require('../controllers/StudentController'); var _StudentController2 = _interopRequireDefault(_StudentController);
var _OAuthUser = require('../middlewares/OAuthUser'); var _OAuthUser2 = _interopRequireDefault(_OAuthUser);

 class StudentRouter extends _express.Router {
  constructor() {
    super();
    /**
   * index method
   */
    this.get('/', _OAuthUser2.default, _StudentController2.default.index);
    /**
     * store method
     */
    this.post('/', _OAuthUser2.default, _StudentController2.default.store);
    /**
     * show method
     */
    this.get('/:id', _OAuthUser2.default, _StudentController2.default.show);
    /**
     * update method
     */
    this.put('/:id', _OAuthUser2.default, _StudentController2.default.update);
    /**
     * delete method
     */
    this.delete('/:id', _OAuthUser2.default, _StudentController2.default.delete);
  }
} exports.default = StudentRouter;
