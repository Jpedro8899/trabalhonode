const express = require ('express')
const banco = require('./banco')
const autor = require('./autor')
const livro = require('./livro')

const app = express()

app.use(express.json)

(function(req, res, next){
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Acess-Control-Allow-Null', '*')
    next()
})

banco.conexao.sync(function(){
    console.log('Banco de dados conectado com sucesso')
})

app.get('/autor/', async function(req, res){
    const resultado = await autor.autor.findAll()
    res.send(resultado)
})
app.get('/livro/', async function(req, res){
    const resultado = await livro.livro.findALL()
    res.send(resultado)
})
app.get('/autor/:id', async function(req, res){
    const autorselecionado = await autor.autor.findByPk(req.params.id,
        {include : {model: livro.livro}}
    )
    if(autorselecionado == null){
        res.status(404).send({})
    }else{
        res.send(autorselecionado)
    }
})
app.get('/livro/:id', async function(req, res){
    const livroselecionado = await livro.livro.findByPk(req.params.id,
    {include: {model: autor.autor}}
    )
    if(livroselecionado == null){
        res.status(404).send({})
    }else{
        res.send(livroselecionado)
    }
})
app.post('/autor', async function(req, res){
    const novoautor = await autor.autor.create({
        nome = req.body.nome
    })
    res.send(novoautor)
})
app.post('/livro',  async function(req, res){
    const novolivro = await livro.livro.create({
        titulo = req.body.titulo,
        autorid = req.body.autorid
    })
    res.send(novolivro)
})


const PORTA = 3000
app.listen(PORTA, req){
    console.log('Servidor iniciando na porta'+PORTA)
}
    