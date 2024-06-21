const express = require ('express')
const banco = require('./banco')
const autor = require('./autor')
const livro = require('./livro')

const app = express()

app.use(express.json)

app.use( function(req, res, next){
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Acess-Control-Allow-Null', '*')
    next()
})

banco.conexao.sync(function(){
    console.log('Banco de dados conectado com sucesso')
})
const PORTA = 3000
app.listen( PORTA, function(){
    console.log("Servidor iniciados na porta "+PORTA);
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
app.post('/autor/', async function(req, res){
    const novoautor = await autor.autor.create({
        nome : req.body.nome
    })
    res.send(novoautor)
})
app.post('/livro/',  async function(req, res){
    const novolivro = await livro.livro.create({
        titulo : req.body.titulo,
        autorid : req.body.autorid
    })
    res.send(novolivro)
})
app.put('/autor/:id', async function(req, res){
    const autoralterado = await autor.autor.update({
        nome : req.body.nome,
    },{
        where:{id: req.params.id}
    })
    if(autoralterado == 0){
        res.status(404).send({})

    }else{
        res.send(autoralterado)
    }
})
app.put('/livro/', async function(req, res){
    const livroalterado = await livro.livro.update({
        titulo : req.body.titulo,
        autorid : req.body.autorid
    })
    if(livroalterado == 0){
        res.status(404).send({})
    }
    else{
        res.send(livroalterado)
    }

})
app.delete('/autor/:id', async function(req, res){
    const autorexcluido = await autor.autor.destroy({
        where:{
            id: req.params.id
        }
        
    })
    if(autorexcluido == 0){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

app.delete('/livro/:id', async function(req, res){
    const livroexcluido = await livro.livro.detroy({
        where:{
            id: req.params.id
        }
    })
    if(livroexcluido == 0){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})
