
module.exports = {
    up: async(queryInterface, Sequelize) =>{
        // First add columns as nullable
        await queryInterface.addColumn('Users', 'firstName', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        });
        await queryInterface.addColumn('Users', 'lastName', {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        });

        // Update existing records with default values
        await queryInterface.sequelize.query(
            `UPDATE "Users" SET "firstName" = 'User', "lastName" = 'Name' WHERE "firstName" IS NULL OR "lastName" IS NULL`
        );

        // Add non-null constraint
        await queryInterface.changeColumn('Users', 'firstName', {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        });
        await queryInterface.changeColumn('Users', 'lastName', {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        });
    },
    down: async(queryInterface, Sequelize) =>{
        await queryInterface.removeColumn('Users', 'firstName');
        await queryInterface.removeColumn('Users', 'lastName');
    },
}