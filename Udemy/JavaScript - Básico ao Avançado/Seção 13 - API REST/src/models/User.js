import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Name cannot be empty',
            },
            len: {
              args: [3, 100],
              msg: 'Name must have between 3 and 100 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING(100),
          defaultValue: '',
          unique: {
            msg: 'Email already exists',
          },
          validate: {
            notEmpty: {
              msg: 'Name cannot be empty',
            },
            isEmail: {
              msg: 'Invalid email',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING(100),
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Name cannot be empty',
            },
            len: {
              args: [6, 50],
              msg: 'Name must have between 3 and 100 characters',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });

    return this;
  }

  isPasswordValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Movie, { foreignKey: 'director_id' });
  }
}
