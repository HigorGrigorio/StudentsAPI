"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _StudentRouter = require('./routes/StudentRouter'); var _StudentRouter2 = _interopRequireDefault(_StudentRouter);
var _UserRouter = require('./routes/UserRouter'); var _UserRouter2 = _interopRequireDefault(_UserRouter);
var _TokenRouter = require('./routes/TokenRouter'); var _TokenRouter2 = _interopRequireDefault(_TokenRouter);
var _PhotoRouter = require('./routes/PhotoRouter'); var _PhotoRouter2 = _interopRequireDefault(_PhotoRouter);

require('./database');

// load .env configs
_dotenv2.default.config();

const whiteList = [
  'http://34.151.233.122',
  'http://localhost:3000',
];

const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

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

    /**
     * configure CORS
     */
    this.use(_cors2.default.call(void 0, corsOption));
    this.use(_helmet2.default.call(void 0, ));

    // configure a static path
    this.use('/images', _express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads', 'images')));

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
