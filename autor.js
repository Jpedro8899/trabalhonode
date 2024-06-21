const sequelize = require('sequelize')
const banco = require('./banco')
const livro = require('./livro')

var autor = banco.conexao.define(
    "autor",
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
autor.hasMany(livro.livro)
livro.livro.belongsTo(autor)

module.exports = {autor}