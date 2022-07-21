"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

 class Photo extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Field originalname cannot be empty',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Field originalname cannot be empty',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() { return `${_app2.default.url}/images/${this.getDataValue('filename')}`; },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
} exports.default = Photo;
