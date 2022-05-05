const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tarefaSchema = new Schema({
    data_de_criacao: {
        type: Date,
        default: Date.now
    },
    nome: {
        type: String
    },
    concluido: {
        type: Boolean,
        default: false
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
})

const TarefaModel = mongoose.model("Tarefa", tarefaSchema) //UsuarioModel é onde eu vou MANIPULAR O BANCO DE DADOS
module.exports = TarefaModel