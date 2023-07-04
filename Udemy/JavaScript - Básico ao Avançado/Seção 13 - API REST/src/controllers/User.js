import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, name, email } = user;
      return res.status(200).json({ id, name, email });
    } catch (error) {
      return res
        .status(400)
        .json({ error: error.message, message: 'User was not created' });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      if (!users) return res.json({ message: 'Users were not found' });
      return res.status(200).json(users);
    } catch (error) {
      return res.json({ message: 'Users were not found' });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      if (!user) return res.json({ message: 'User not found' });
      return res.status(200).json({ id, name, email });
    } catch (error) {
      return res.json({ message: 'User not found' });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
      const newUser = await user.update(req.body);
      const { id, name, email } = newUser;
      return res.status(200).json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
      await user.destroy();
      return res.status(200).json({
        deleted: true,
        message: 'User deleted',
      });
    } catch (error) {
      return res.status(400).json({
        deleted: false,
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
