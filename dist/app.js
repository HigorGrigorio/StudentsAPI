"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _StudentRouter = require('./routes/StudentRouter'); var _StudentRouter2 = _interopRequireDefault(_StudentRouter);
var _UserRouter = require('./routes/UserRouter'); var _UserRouter2 = _interopRequireDefault(_UserRouter);
var _TokenRouter = require('./routes/TokenRouter'); var _TokenRouter2 = _interopRequireDefault(_TokenRouter);
var _PhotoRouter = require('./routes/PhotoRouter'); var _PhotoRouter2 = _interopRequireDefault(_PhotoRouter);

require('./database');

// load .env configs
_dotenv2.default.config();

class App extends _express2.default {
  constructor() {
    // initialize express instance
    super();

    /**
     * load middlewares
     */
    // express middlewares configuration
    this.use(_express2.default.urlencoded({ extended: true }));
    this.use(_express2.default.json());

    // configure a static path
    this.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'src', 'uploads')));

    /**
     * load routes
     */
    this.use('/students', new (0, _StudentRouter2.default)());
    this.use('/users', new (0, _UserRouter2.default)());
    this.use('/tokens', new (0, _TokenRouter2.default)());
    this.use('/photos', new (0, _PhotoRouter2.default)());
  }
}

exports. default = new App();
