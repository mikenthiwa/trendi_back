module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CampaignGuidelines', [
      {
        campaignId: 1, // Summer Fashion Campaign
        content: [
          'Create authentic, engaging content showcasing our summer collection',
          'Highlight the versatility of the pieces in different settings',
          'Include at least one beach or outdoor summer setting',
          'Demonstrate how the pieces can be mixed and matched',
          'Use natural lighting when possible',
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
