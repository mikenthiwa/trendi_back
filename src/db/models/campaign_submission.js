import { DataTypes } from 'sequelize';
import sequelize from '../models';

const CampaignSubmission = sequelize.define('CampaignSubmission', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  campaignId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Campaigns',
      key: 'id',
    },
  },
  influencerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'pending',
    validate: {
      isIn: [['pending', 'approved', 'rejected']],
    },
  },
  links: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [],
  },
});

CampaignSubmission.associate = (models) => {
  CampaignSubmission.belongsTo(models.Campaign, {
    foreignKey: 'campaignId',
    as: 'campaign',
    onDelete: 'CASCADE',
  });
  CampaignSubmission.belongsTo(models.User, {
    foreignKey: 'influencerId',
    as: 'influencer',
    onDelete: 'CASCADE',
  });
};

export default CampaignSubmission;
