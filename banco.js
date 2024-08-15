const sequelize =  require("sequelize")
require('dotenv').config()

const conexao = new sequelize(
    "trabalhonode",
    "root",
    "root",

{
    dialect:'mysql',

    host:process.env.DB_HOST
}
)

module.exports={conexao}