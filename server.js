//importar o express
import express, { request, response } from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
//Criando a primeira rota

const users = []

app.get('/usuarios/', async (req, res) => {//listar usuarios


    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.post('/usuarios', async (req, response) => {//listar usuarios

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    response.status(201).json(user)
})

app.put('/usuarios/:id', async (req, response) => {//listar usuarios

    req.params.id
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    response.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuário deletado" })
})

app.listen(3000)
//req - > requisição
//rep = resposta
//http://localhost:3000

/*
CRUD
CREATE
READ
UPDATE
DELETE

*/


/*
andressa
RzBpKBQuR6ydFrjU
*/