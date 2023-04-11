const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.json())


app.use (routes)

app.listen(33333, () => {
    console.log('rodando na porta 3333')
})
