import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class File extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'The file originalname cannot be empty',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'The file filename cannot be empty',
            },
          },
        },
        movie_id: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
          unique: {
            msg: 'Email already exists',
          },
          validate: {
            notEmpty: {
              msg: 'The file movie_id cannot be empty',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
