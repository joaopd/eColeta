const express = require("express")
const server = express()

//configurar caminhos da aplicação
//req = requisicao
//res = resposta

server.get("/", (req, res) => {
    res.send("Cheguei ")
})

// ligar o servidor

server.listen(3000)