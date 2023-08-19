const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },

})

Tought.belongsTo(User)  // BelongsTo = Pertence 
User.hasMany(Tought)   // hasMany = Tem

module.exports = Tought

