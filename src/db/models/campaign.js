import { DataTypes } from 'sequelize';
import sequelize from '../models';

const Campaign = sequelize.define('Campaign', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'upcoming',
    validate: {
      isIn: [['ongoing', 'completed', 'upcoming']],
    },
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Campaign.associate = (models) => {
  Campaign.belongsTo(models.User, {
    foreignKey: 'brandId',
    as: 'brand',
  });
  Campaign.hasOne(models.CampaignGuideline, {
    foreignKey: 'campaignId',
    as: 'campaignGuideline',
  });
};

export default Campaign;
