module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('movies', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(100),
      unique: true,
    },
    director_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    },
    genre: {
      allowNull: true,
      type: Sequelize.STRING(100),
    },
    release_year: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    synopsis: {
      allowNull: true,
      type: Sequelize.STRING(1000),
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('movies'),
};
