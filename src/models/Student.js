import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
}
