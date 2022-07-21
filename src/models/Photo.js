import Sequelize, { Model } from 'sequelize';
import config from '../config/app';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Field originalname cannot be empty',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Field originalname cannot be empty',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() { return `${config.url}/images/${this.getDataValue('filename')}`; },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
