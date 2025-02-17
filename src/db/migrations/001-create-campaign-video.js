module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CampaignVideos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CampaignSubmissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CampaignSubmissions',
          key: 'id',
          onDelete: 'Cascade',
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      videoUrls: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        allowNull: false,
        validate: {
          isArray: true,
        },
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
    await queryInterface.dropTable('CampaignVideos');
  },
};
