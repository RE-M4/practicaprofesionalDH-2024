module.exports = function(sequelize, DataTypes) {

    let alias = "Degree";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        degree_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        tablename: 'degrees'
    }
    
    const Degree = sequelize.define(alias, cols, config);

    return Degree;
};