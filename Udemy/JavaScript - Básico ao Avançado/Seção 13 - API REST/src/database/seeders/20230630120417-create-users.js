const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Sam Raimi',
        email: 'sam@raimi.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ridley Scott',
        email: 'ridley@scott.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Shinichiro Watanabe',
        email: 'shinichiro@watanabe',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Wes Craven',
        email: 'wes@craven.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Edgar Wright',
        email: 'edgar@wright.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Stanley Kubrick',
        email: 'stanley@kubrick.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Quentin Tarantino',
        email: 'quentin@tarantino.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'David Fincher',
        email: 'david@fincher.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Peter Jackson',
        email: 'peter@jackson.com',
        password_hash: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: async () => {},
};
