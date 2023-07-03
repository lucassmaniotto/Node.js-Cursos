import Movie from '../models/Movie';
import File from '../models/File';

class MovieController {
  async index(req, res) {
    try {
      const movies = await Movie.findAll({
        attributes: [
          'id',
          'title',
          'director_id',
          'genre',
          'release_year',
          'synopsis',
        ],
        order: [['id', 'DESC']],
        include: {
          model: File,
          as: 'poster',
          attributes: ['filename', 'url'],
        },
      });
      return res.json(movies);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not provided'] });
      }
      const movie = await Movie.findByPk(id, {
        attributes: [
          'id',
          'title',
          'director_id',
          'genre',
          'release_year',
          'synopsis',
        ],
        order: [['id', 'DESC']],
        include: {
          model: File,
          as: 'poster',
          attributes: ['filename', 'url'],
        },
      });
      if (!movie) {
        return res.status(400).json({ errors: ['Movie not found'] });
      }
      return res.json(movie);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const movie = await Movie.create(req.body);
      return res.json(movie);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not provided'] });
      }
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.status(400).json({ errors: ['Movie not found'] });
      }
      const updatedMovie = await movie.update(req.body);
      return res.json(updatedMovie);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not provided'] });
      }
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.status(400).json({ errors: ['Movie not found'] });
      }
      await movie.destroy();
      return res.json({
        deleted: true,
        message: 'Movie deleted',
      });
    } catch (error) {
      return res.status(400).json({
        deleted: false,
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new MovieController();
