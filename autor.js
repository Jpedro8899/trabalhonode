const sequelize = require('sequelize')
const banco = require('./banco')
const livros = require('./livro')

var autors = banco.conexao.define(
    "autors",
    {
        id:{
            type: sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true

        },
        nome:{
            type: sequelize.STRING,
            allowNull: false

        }
        
    },
    {timestamps:false}
)
autors.hasMany(livros.livros)
livros.livros.belongsTo(autors)

module.exports = {autors}