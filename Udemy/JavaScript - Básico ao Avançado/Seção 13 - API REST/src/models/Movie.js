import Sequelize, { Model } from 'sequelize';

export default class Movie extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      director: Sequelize.STRING,
      genre: Sequelize.STRING,
      release_year: Sequelize.INTEGER,
      synopsis: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
