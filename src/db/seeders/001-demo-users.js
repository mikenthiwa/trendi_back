module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'demoUser',
        email: 'demo-user@gmail.com',
        role: 'brand',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'demoUser2',
        email: 'demo-user2@gmail.com',
        role: 'influencer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
