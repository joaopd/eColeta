// import this dependence for sqlite3

const { query } = require("express");

const sqlite3 = require("sqlite3").verbose()

//iniciar o obj que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db") 

module.exports = db

//ultilizar o obj de banco de dados


// db.serialize(() => {
//     // criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places ( 
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           image TEXT,
//           name TEXT,
//           address TEXT,
//           address2 TEXT,
//           state TEXT,
//           city TEXT,
//           items TEXT
//         );`)

//     //inserir dados na tabela
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address,
//         state,
//         city,
//         items
//     ) VALUES(?,?,?,?,?,?,?);`

//     const values = [
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//         ""
//     ]

//     function afterIsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com Sucesso")
//         console.log(this)
//     }

//    // db.run(query, values, afterIsertData)

//     //consultar dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Aqui estão os registros ")
//         console.log(rows)
//     })
//     //deletar dado da tabela

//     db.run(`DELETE FROM places WHERE ID = ?`, [1], function(err)
//     {
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })
// })