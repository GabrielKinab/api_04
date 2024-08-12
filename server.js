//criar uma query(consulta) simples

const express = require('express')
const mysql = require('mysql2')

const app = express();

app.listen(3000, ()=>{
    console.log("Tamo ligado no ar")
})

//criação de conexão de banco de dados
const connection =mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGB2R97Djet&vXYHggatTSZE4',
    database: 'nodejs_tasks'
})

//testar a conexão
connection.connect(error =>{
    if (error){
        console.log('Tá passando mal o MySql:'+error.message)
        return
    }
    console.log('Tá pegando bem de boa!!')
});
