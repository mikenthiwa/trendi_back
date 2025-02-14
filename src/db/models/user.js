import { DataTypes } from 'sequelize';
import sequelize from '../models';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isIn: [['influencer', 'brand']],
    },
  },
});

User.associate = (models) => {
  User.hasMany(models.Campaign, {
    foreignKey: 'brandId',
    as: 'campaigns',
  });
};

export default User;
