import Movie from '../models/Movie';

class MovieController {
  async index(req, res) {
    const movies = await Movie.findAll();
    return res.json(movies);
  }
}

export default new MovieController();
