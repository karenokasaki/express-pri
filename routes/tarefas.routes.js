//sempre começar com importando o express
const express = require('express');
const router = express.Router()

const tarefas = ['lavar louça', 'dar banho na sofia']

router.get("/todas-tarefas", (req, res) => {
    return res.status(200).json(tarefas)
})

//fazer uma rota para adicionar taregas

//fazer uma rota para apagar a ultima tarefa


//sempre EXPORTAR O ROUTER
module.exports = router;