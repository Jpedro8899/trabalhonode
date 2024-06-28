const sequelize = require('sequelize')
const banco = require('./banco')
const autors =  require('./autor')

var livros = banco.conexao.define (
    "livros",
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

module.exports = {livros}
