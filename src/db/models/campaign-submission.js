module.exports = (sequelize, DataTypes) => {
  const CampaignSubmission = sequelize.define('CampaignSubmission', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    campaignId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Campaign',
        key: 'id',
        onDelete: 'Cascade',
      },
    },
    influencerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Influencer',
        key: 'id',
        onDelete: 'Cascade',
      },
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending',
      allowNull: false,
    },
  });

  CampaignSubmission.associate = (models) => {
    CampaignSubmission.belongsTo(models.Campaign, {
      foreignKey: 'campaignId',
      onDelete: 'CASCADE',
    });
    CampaignSubmission.belongsTo(models.User, {
      foreignKey: 'influencerId',
      onDelete: 'CASCADE',
    });
    CampaignSubmission.hasMany(models.CampaignVideo, {
      foreignKey: 'campaignSubmissionId',
      onDelete: 'CASCADE',
    });
  };
  return CampaignSubmission;
};
