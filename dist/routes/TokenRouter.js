"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

 class TokenRouter extends _express.Router {
  constructor() {
    super();
    /**
     * store method
     */
    this.post('/', _TokenController2.default.store);
  }
} exports.default = TokenRouter;
