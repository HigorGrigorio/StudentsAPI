import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  async comparePassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
