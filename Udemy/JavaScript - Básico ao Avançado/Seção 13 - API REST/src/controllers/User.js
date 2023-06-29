import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      if (!users) return res.json({ message: 'Users were not found' });
      return res.status(200).json(users);
    } catch (error) {
      return res.json({ message: 'Users were not found' });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.json({ message: 'User not found' });
      return res.status(200).json(user);
    } catch (error) {
      return res.json({ message: 'User not found' });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID not provided'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
      const newUser = await user.update(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID not provided'],
        });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
      await user.destroy();
      return res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }
  }
}

export default new UserController();
