module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'username');
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
