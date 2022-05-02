// importa o express
const express = require('express');  // mesma coisa -> import express from "express"
// INSTANCIA o express
const app = express()
//liberar o app para aceitar JSON 
app.use(express.json())

const array = ['priscila', 'karen', 'jose', 'maria', 'joao']


// herokuapp.com/fabricadepersonas
// localhost:4000/nomes

app.get("/nomes", (req, res) => {
    // quando acessarem essa rota, devolve a array de nomes pro usuário
    return res.status(200).json(array)
})

app.delete('/delete-nomes', (req, res) => {
    // quando acessarem essa rota, devolve a array de nomes pro usuário
    array.pop()
    return res.status(200).json(array)
})

app.post('/criar-nome', (req, res) => {
    // quando acessar essa rota, adicionar um novo nome que será passado pela REQUISIÇÃO
    console.log(req.body)
    array.push(req.body.nome)
    return res.status(200).json(array)
})

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})