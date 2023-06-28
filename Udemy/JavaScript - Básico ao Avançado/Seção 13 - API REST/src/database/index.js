import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Movie from '../models/Movie';

const models = [Movie];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
