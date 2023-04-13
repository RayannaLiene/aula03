const { Router } = require('express')

const {createCart}= require('./controllers')

const routes = Router()

routes.post('/Cart', createCart)

module.exports = routes