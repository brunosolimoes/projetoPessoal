import express from 'express'

const servidor = express()

servidor.get("/", (req, res)=>{
    res.status(201).send({status: "ta funcionando!"})
}); 

servidor.listen(3030, ()=>{
    console.log("Servidor rodando na porta 3030")
})