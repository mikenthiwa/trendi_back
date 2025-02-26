module.exports = {
    up: async (queryInterface, Sequelize) => {
      // First, create campaign submissions
      await queryInterface.bulkInsert(
        'CampaignSubmissions',
        [
          {
            campaignId: 1, // Summer Fashion Campaign
            influencerId: 2, // Demo influencer user
            status: 'approved',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            campaignId: 2, // Winter Collection Launch
            influencerId: 2, // Demo influencer user
            status: 'pending',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        { returning: true }
      );
  
      // Then, create campaign videos for the approved submission
      await queryInterface.bulkInsert('CampaignVideos', [
        {
          campaignSubmissionId: 4, // First submission (approved)
          title: 'Summer Fashion Showcase',
          videoUrls: ['https://www.youtube.com/watch?v=rRwMBUL7zyw&list=PLURaeuNWMwdwbpIc0ioy7R_HEInCFUHPU&index=9'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      // First delete the videos
      await queryInterface.bulkDelete('CampaignVideos', null, {});
      // Then delete the submissions
      await queryInterface.bulkDelete('CampaignSubmissions', null, {});
    },
  };
  