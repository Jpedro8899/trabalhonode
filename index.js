const express = require ('express')
const banco = require('./banco')
const autors = require('./autor')
const livros = require('./livro')

const app = express()

app.use(express.json())

app.use( function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

banco.conexao.sync(function(){
    console.log("Banco de dados conectado com sucesso")
})
const PORTA = 3000
app.listen( PORTA, function(){
    console.log("Servidor iniciado na porta "+PORTA);
})

app.get("/autors/", async function(req, res){
    const resultado = await autors.autors.findAll()
    res.send(resultado)
})
app.get("/livros/", async function(req, res){
    const resultado = await livros.livros.findAll()
    res.send(resultado)
})
app.get("/autors/:id", async function(req, res){
    const autorselecionado = await autors.autors.findByPk(req.params.id,
        {include : {model: livros.livros}}
    )
    if(autorselecionado == null){
        res.status(404).send({})
    }else{
        res.send(autorselecionado)
    }
})
app.get("/livros/:id", async function(req, res){
    const livroselecionado = await livros.livros.findByPk(req.params.id,
    {include: {model: autors.autors}}
    )
    if(livroselecionado == null){
        res.status(404).send({})
    }else{
        res.send(livroselecionado)
    }
})
app.post("/autors/", async function(req, res){
    const novoautor = await autors.autors.create({
        nome : req.body.nome
    })
    res.send(novoautor)
})
/*app.post("/autor/:id", async function(req, res){
    const novoautor = await autor.autor.create({
        id: req.body.id,
        nome : req.body.nome
    })
    res.send(novoautor)
})*/

app.post("/livros/",  async function(req, res){
    const novolivro = await livros.livros.create({
        titulo : req.body.titulo,
        autorId : req.body.autorId
    })
    res.send(novolivro)
})
app.put("/autors/:id", async function(req, res){
    const autoralterado = await autors.autors.update({
        nome : req.body.nome
    },{
        where:{id: req.params.id}
    })
    if(autoralterado == 0){
        res.status(404).send({})

    }else{
        res.send(await autors.autors.findByPk(req.params.id))
    }
})

app.put("/livros/:autorId", async function(req, res){
    const livroalterado = await livros.livros.update({
        titulo : req.body.titulo,
        autorId : req.body.autorId
    },{   where:{autorId: req.params.autorId}
})
    if(livroalterado == 0){
        res.status(404).send({})
    }
    else{
        res.send(await livros.livros.findByPk(req.params.autorId))
    }

})
app.delete("/autors/:id", async function(req, res){
    const autorexcluido = await autors.autors.destroy({
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

app.delete("/livros/:id", async function(req, res){
    const livroexcluido = await livros.livros.destroy({
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

app.get("/nome/titulo/:titulo", async function(req, res){
    const puxartudo = await nome.nome.findAll({
        where:{titulo: req.params.titulo},
        include:{model:titulo.titulo}
    })
})
