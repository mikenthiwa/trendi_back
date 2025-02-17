module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Campaigns', [
      {
        title: 'Summer Fashion Campaign',
        userId: 1, // References the demo brand user
        status: 'ongoing',
        deadline: new Date('2024-06-30'),
        slug: 'summer-fashion-2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Winter Collection Launch',
        userId: 1, // References the demo brand user
        status: 'upcoming',
        deadline: new Date('2024-12-01'),
        slug: 'winter-collection-2024',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Campaigns', null, {});
  },
};
