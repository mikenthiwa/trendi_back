module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncreament: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.ENUM('upcoming', 'ongoing', 'completed'),
      defaultValue: 'upcoming',
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Campaign.associate = (models) => {
    Campaign.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'brand',
    });
    Campaign.hasOne(models.CampaignGuideline, {
      foreignKey: 'campaignId',
      as: 'campaignGuideline',
    });
    Campaign.hasMany(models.CampaignSubmission, {
      foreignKey: 'campaignId',
      as: 'campaignSubmission',
    });
  };

  return Campaign;
};
