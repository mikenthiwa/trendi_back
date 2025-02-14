import { DataTypes } from 'sequelize';
import sequelize from '.';

const campaign_guideline = sequelize.define('campaign_guideline', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  campaignId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'campaign',
      key: 'id',
    },
  },
  content: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [],
    validate: {
      isArray: true,
    },
  },
});

campaign_guideline.associate = (models) => {
  campaign_guideline.belongsTo(models.campaign, {
    foreignKey: 'campaignId',
    onDelete: 'CASCADE',
  });
};
export default campaign_guideline;
