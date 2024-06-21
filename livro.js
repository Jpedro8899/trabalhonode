const sequelize = require('sequelize')
const banco = require('./banco')
const autor =  require('./autor')

var livro = banco.conexao.define (
    "livro",
    {
    id:{
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement: true
    },
    titulo:{
        type: sequelize.STRING,
        allowNull: false

    }
    },
    {timestamps:false}
)

module.exports = {livro}
