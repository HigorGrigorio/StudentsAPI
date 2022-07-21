"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: 'The field name must between 3 and 255 characters',
          },
        },
      },
      surname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: 'The field name must between 3 and 255 characters',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Invalid email address provided',
          },
        },
      },
      age: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
} exports.default = Student;
