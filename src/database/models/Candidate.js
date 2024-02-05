module.exports = function(sequelize, DataTypes) {

    let alias = "Candidate";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        dni: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        candidate_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        candidate_last_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER(20).UNSIGNED,
            allowNull: false
        },
        github_profile: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        tablename: 'candidates'
    }
    
    const Cantidate = sequelize.define(alias, cols, config);

    return Cantidate;
};