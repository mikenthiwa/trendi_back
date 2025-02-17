module.exports = (sequelize, DataTypes) => {
  const CampaignVideo = sequelize.define('CampaignVideo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    campaignSubmissionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CampaignSubmission',
        key: 'id',
        onDelete: 'Cascade',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,
      validate: {
        isArray: true,
      },
    },
  });
  CampaignVideo.associate = (models) => {
    CampaignVideo.belongsTo(models.CampaignSubmission, {
      foreignKey: 'campaignSubmissionId',
      onDelete: 'CASCADE',
    });
  };
  return CampaignVideo;
};
