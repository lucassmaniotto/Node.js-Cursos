import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Movie from '../models/Movie';
import User from '../models/User';

const models = [Movie, User];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
