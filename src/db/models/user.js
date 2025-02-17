module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncreament: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    role: {
      type: DataTypes.ENUM('brand', 'influencer'),
      default: 'influencer',
      allowNull: false,
    },
  });
  User.hasMany(sequelize.models.Campaign, {
    foreignKey: 'userId',
    as: 'campaigns',
  });
  return User;
};
