module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CampaignGuidelines', [
      {
        campaignId: 2,
        content: [
          '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          '2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          '3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          '4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CampaignGuidelines', null, {});
  },
};
