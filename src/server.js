const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

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

    console.log(req.query)

    return res.render("create-point.html")
 
    // req.query = query string da url

})

server.post("/savepoint", req, res)
server.get("/search-results", (req, res) => {

    //pegar do banco de dados
    
    //consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão os registros ")
        console.log(rows)

        const total = rows.length
        //mostrar a pagina com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total})
    })
})

// ligar o servidor

server.listen(3000)