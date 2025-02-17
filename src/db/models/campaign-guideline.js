module.exports = (sequelize, DataTypes) => {
  const CampaignGuideline = sequelize.define(
    'CampaignGuideline',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncreament: true,
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
      content: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: false,
        validate: {
          isArray: true,
        },
      },
    },
    { timeStamps: true }
  );
  CampaignGuideline.associate = (models) => {
    CampaignGuideline.belongsTo(models.Campaign, {
      foreignKey: 'campaignId',
      onDelete: 'CASCADE',
    });
  };
  return CampaignGuideline;
};
