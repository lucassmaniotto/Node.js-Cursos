import Movie from '../models/Movie';

class Home {
  async index(req, res) {
    const movies = await Movie.create({
      title: 'The Shining',
      director: 'Stanley Kubrick',
      genre: 'Horror',
      release_year: 1980,
      synopsis: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
    });
    res.status(200).json(movies);
  }
}

export default new Home();
