import User from '../models/User';

class Home {
  async create(req, res) {
    try {
      const movies = await User.create(req.body);
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => ({
          field: err.path,
          message: err.message,
        })),
      });
    }
  }
}

export default new Home();
