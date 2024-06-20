const express = require ('express')

const app = express()

app.use(express.json)

(function(req, res, next){
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Acess-Control-Allow-Null', '*')
    next()
})


const PORTA = 3000
app.listen(PORTA, req){
    console.log('Servidor iniciando na porta'+PORTA)
}
    