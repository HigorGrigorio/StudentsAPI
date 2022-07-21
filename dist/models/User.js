"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
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
            args: [3, 255],
            msg: 'The field surname must between 3 and 255 characters',
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
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: 'The field password must between 6 and 255 characters',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  async comparePassword(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
