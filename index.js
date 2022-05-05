// importa o express
const express = require('express');  // mesma coisa -> import express from "express"
// INSTANCIA o express
const app = express()
//liberar o app para aceitar JSON 
app.use(express.json())
// importar a minha configuração do banco de dados - NÃO ESQUECER DE DAR O NPM INSTALL MONGOOSE
const connect = require("./config/db.config");
connect() // ela vai se conectar com o banco de dados

const array = ['priscila', 'karen', 'jose', 'maria', 'joao']

// https://herokuapp.com/fabricadepersonas
// localhost:4000/nomes




//criar duas rotas 
// uma rota de USUÁRIOS - todas as pessoas que moram na sua casa
const usuariosRouter = require('./routes/usuarios.routes')
app.use('/usuarios', usuariosRouter)

// outra rota de TAREFAS - todas as tarefas que você precisa fazer
const tarefasRouter = require('./routes/tarefas.routes')
app.use('/tarefas', tarefasRouter)


app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})