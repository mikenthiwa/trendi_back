module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Campaigns', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            userId: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            status: {
                type: Sequelize.DataTypes.ENUM('upcoming', 'ongoing', 'completed'),
                defaultValue: 'upcoming',
            },
            deadline: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            },
            slug: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            }
        })
    },
    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Campaigns')
    }
}