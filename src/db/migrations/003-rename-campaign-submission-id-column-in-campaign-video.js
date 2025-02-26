module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn('CampaignVideos', 'CampaignSubmissionId', 'campaignSubmissionId');
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn('CampaignVideos', 'campaignSubmissionId', 'CampaignSubmissionId');
    }
}