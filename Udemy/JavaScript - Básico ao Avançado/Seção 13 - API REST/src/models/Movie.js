import Sequelize, { Model } from 'sequelize';

export default class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'The movie already exists',
          },
          validate: {
            notEmpty: {
              msg: 'The movie title cannot be empty',
            },
            len: {
              args: [1, 100],
              msg: 'The movie title must have between 1 and 100 characters',
            },
          },
        },
        genre: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [0, 100],
              msg: 'The movie genre must have between 0 and 100 characters',
            },
          },
        },
        release_year: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 4],
              msg: 'The movie release year must have 4 characters',
            },
            isInt: {
              msg: 'The movie release year must be an integer',
            },
          },
        },
        synopsis: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [0, 1000],
              msg: 'The movie synopsis must have between 0 and 1000 characters',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasOne(models.File, { foreignKey: 'movie_id', as: 'poster' });
  }
}
