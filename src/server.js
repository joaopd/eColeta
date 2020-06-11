const express = require("express")
const server = express()

//Configurar pasta public

server.use(express.static("public"))


//utilizando templade nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da aplicação
//req = requisicao
//res = resposta

server.get("/", (req, res) => {
   return res.render("index.html")
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

// ligar o servidor

server.listen(3000)