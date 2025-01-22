//importar o express
import express, { request, response } from 'express'

const app = express()
app.use(express.json())
//Criando a primeira rota

const users = []

app.get('/usuarios/', (req, res) =>{//listar usuarios
        res.status(200).json(users)
}) 

app.post('/usuarios', (req, response) =>{//listar usuarios
    users.push(req.body)
    response.status(201).json({message:"Usuário cadastro com sucesso"})
}) 



app.listen(3000)
//req - > requisição
//rep = resposta
//http://localhost:3000


/*
andressa
RzBpKBQuR6ydFrjU
*/