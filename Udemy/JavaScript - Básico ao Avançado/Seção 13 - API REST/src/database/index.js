import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Movie from '../models/Movie';
import User from '../models/User';
import File from '../models/File';

const models = [Movie, User, File];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
