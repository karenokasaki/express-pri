//sempre começar com importando o express
const express = require('express');
const router = express.Router()

const usuarios = []

//não começa com app.get e sim com router.get

//criar um usuário
router.post('/criar-usuario', (req, res) => {
    usuarios.push(req.body)
    return res.status(200).json(usuarios)
})

router.get('/todos-usuarios', (req, res) => {
    return res.status(200).json(usuarios)
})

//rotas para apagar um usuário

//rota pra editar um usuario






//sempre EXPORTAR O ROUTER
module.exports = router;