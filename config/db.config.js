const mongoose = require('mongoose');

async function connect() {
    // essa é a função que vai se conectar com o seu banco de dados
    const dbConnect = await mongoose.connect(
        "mongodb://localhost:27017/castro" //essa é a unica linha que importa
    );

    console.log('Conectado ao banco de dados com sucesso!', dbConnect.connections[0].name);
}

module.exports = connect;