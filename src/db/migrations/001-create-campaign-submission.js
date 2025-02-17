module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CampaignSubmissions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      campaignId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Campaigns',
          key: 'id',
          onDelete: 'CASCADE',
        },
      },
      influencerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          onDelete: 'CASCADE',
        },
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending',
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CampaignSubmissions');
  },
};
