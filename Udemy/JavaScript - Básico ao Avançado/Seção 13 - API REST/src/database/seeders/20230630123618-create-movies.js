module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'movies',
    [
      {
        title: 'Spider-Man 2',
        director: 'Sam Raimi',
        genre: 'Action',
        release_year: 2004,
        synopsis: 'Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Blade Runner',
        director: 'Ridley Scott',
        genre: 'Sci-Fi',
        release_year: 1982,
        synopsis: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Scream',
        director: 'Wes Craven',
        genre: 'Horror',
        release_year: 1996,
        synopsis: 'A group of young people face a masked killer who tests their knowledge of horror movies. Small town Woodsboro will never be the same.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Scott Pilgrim vs. the World',
        director: 'Edgar Wright',
        genre: 'Action',
        release_year: 2010,
        synopsis: 'Scott Pilgrim must defeat his new girlfriend\'s seven evil exes in order to win her heart.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'The Shining',
        director: 'Stanley Kubrick',
        genre: 'Horror',
        release_year: 1980,
        synopsis: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Kill Bill: Vol. 1',
        director: 'Quentin Tarantino',
        genre: 'Action',
        release_year: 2003,
        synopsis: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Reservoir Dogs',
        director: 'Quentin Tarantino',
        genre: 'Crime',
        release_year: 1992,
        synopsis: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        genre: 'Crime',
        release_year: 1994,
        synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Fight Club',
        director: 'David Fincher',
        genre: 'Drama',
        release_year: 1999,
        synopsis: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Lord of The Rings: The Fellowship of The Ring',
        director: 'Peter Jackson',
        genre: 'Fantasy',
        release_year: 2001,
        synopsis: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Lord of The Rings: The Two Towers',
        director: 'Peter Jackson',
        genre: 'Fantasy',
        release_year: 2002,
        synopsis: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Lord of The Rings: The Return of The King',
        director: 'Peter Jackson',
        genre: 'Fantasy',
        release_year: 2003,
        synopsis: 'The final confrontation between the forces of good and evil as they fight for control of Middle Earth\'s future approaches. Sauron plans a major attack on Tirith Mines, the capital of Gondor, which causes Gandalf and Pippin to go there with the intention of helping the resistance.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: async () => {},
};
