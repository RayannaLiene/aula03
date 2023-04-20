const { Router } = require('express')

const { createCart, getListOfCart, createUserCart }= require('./controllers')

const routes = Router()

routes.post('/Cart', createCart)

routes.get('/Cart', getListOfCart)

routes.post('/Cart/User-Cart', createUserCart)

module.exports = routes
