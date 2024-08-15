const sequelize = require('sequelize')
const banco = require('./banco')
const autors =  require('./autor')
const { FOREIGNKEYS } = require('sequelize/lib/query-types')

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

    },
    autorId:{
        type: sequelize.INTEGER.UNSIGNED,
        FOREIGNKEYS: true
    }
    },
    {timestamps:false}
)

module.exports = {livros}
