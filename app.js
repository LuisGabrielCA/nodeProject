const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cadastro = require("./models/cadastro")
const { sequelize } = require("./models/bd")


//template
app.set('view engine', 'ejs')

//bodyParser
app.use(bodyParser.urlencoded({ extend: false}))
app.use(bodyParser.json())

//statics
app.use('/public', express.static('public'));

//rotas
app.get('/home', function(req,res){
res.render("../views/home")

})

app.get('/addUser', function(req,res){
    res.render("../views/addUser")
})

app.post('/cadUsuario', function(req,res){
    cadastro.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        bairro: req.body.bairro,
        regiao: req.body.regiao,
        sexo: req.body.sexo,
        dtnascimento: req.body.dtnascimento,
        email: req.body.email,
        endereco: req.body.endereco,
        estadocivil: req.body.estadocivil,
        filhos: req.body.filhos,
        origem: req.body.origem,
        observacao: req.body.observacao

    }).then(function(){

        res.send("Usuario Cadastrado")

    }).catch(function(erro){

        res.send("Erro:" + erro)

    })
})


app.get('/delUser/:idusuarios',function(req,res){
   
    cadastro.destroy({
        where:{'idusuarios' :req.params.idusuarios}
    }).then(function(){

        res.render('../views/delUser')

    }).catch(function(erro){

        res.send("Cadastro não deletado: " + erro)
    })
    
})

app.get ('/updateUser/:idusuarios', async function(req,res){

   const usuario = await cadastro.findAll({

        where:{
            idusuarios: req.params.idusuarios
        }
    })

    res.render('../views/updateUser', {usuario: usuario[0]})

})

app.post('/controllerUpdate/', (req,res) =>{

    cadastro.update(
    {   nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        bairro: req.body.bairro,
        regiao: req.body.regiao,
        sexo: req.body.sexo,
        dtnascimento: req.body.dtnascimento,
        email: req.body.email,
        endereco: req.body.endereco,
        estadocivil: req.body.estadocivil,
        filhos: req.body.filhos,
        origem: req.body.origem,
        observacao: req.body.observacao
        
        },
        { where: { idusuarios: req.body.idusuarios } }
      ).then(function(){

      res.send("ATUALIZADO COM SUCESSO")
      }).catch(function(erro){

        res.send("Cadastro não alterado: " + erro)
    })
})

app.get('/listUser', function (req,res){
    cadastro.findAll().then(function(cadastro){

        res.render('listUser', {cadastro: cadastro})

    })
})

app.get('/filterBr', function(req,res){

    res.render("../views/filterBr")
})

app.get ('/resultFilter', function(req,res){
       
    cadastro.findAll({
        where:{
            bairro: req.query.bairro,
            regiao: req.query.regiao
        }

    }).then(function(cadastro){

        res.render('resultFilter', {cadastro: cadastro})
        
    }).catch(function(erro){

        res.send("ERRO: " + erro)
    })
    
})

app.listen(8080)
