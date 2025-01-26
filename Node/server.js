//// express
import express from 'express';
const app = express();

//json
app.use(express.json());

// prisma
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


//// ROTAS


//listar usuários
app.get ('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users);
})


//criar usuários
app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            idade: req.body.idade
        }
    })
    
    res.status(201).json(req.body); 
})


//editar usuários
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            name: req.body.name,
            email: req.body.email,
            idade: req.body.idade
        }
    })

    res.status(201).json();
})

//deletar usuários
app.delete('/usuarios/:id', async (req, res) => {        
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Usuário deletado com sucesso!'}); 
})



app.listen(3000)
