//sempre começar com importando o express
const express = require('express');
const router = express.Router()

//importando o modelo de usuario
const UsuarioModel = require('../models/Usuario.model')


//não começa com app.get e sim com router.get

//criar um usuário
router.post('/criar-usuario', async (req, res) => {
    try {

        const novoUsuario = await UsuarioModel.create(
            { ...req.body }
        )

        return res.status(201).json(novoUsuario)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error })
    }
})

//pegar todos os usuarios
router.get('/todos-usuarios', async (req, res) => {
    try {

        const todosUsuarios = await UsuarioModel.find()

        return res.status(200).json(todosUsuarios)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error })
    }
})

//pegar UM usuario pelo ID dele.
router.get("/:id", async (req, res) => {
    try {
        const usuarioId = req.params.id

        const um_usuario = await UsuarioModel.findById(usuarioId)

        return res.status(200).json(um_usuario)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error })
    }
})

//editar UM usuario pelo ID dele.
router.patch("/editar-usuario/:id", async (req, res) => {
    try {

        const usuarioId = req.params.id
        const usuarioEditado = await UsuarioModel.findByIdAndUpdate(
            usuarioId, //estou passando o id do usuario que eu quero atualizar 
            { ...req.body },// todas as informações que eu quero atualizar
            { new: true } //pra ele me trazer o usuario atualizado
        )
        return res.status(200).json(usuarioEditado)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error })
    }
})

router.delete("/deletar/:id", async (req, res) => {
    try {

        const usuarioId = req.params.id
        const usuarioDeletado = await UsuarioModel.findOneAndDelete({ _id: usuarioId })

        return res.status(200).json(usuarioDeletado)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error })
    }
})







//sempre EXPORTAR O ROUTER
module.exports = router;