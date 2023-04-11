const { Router } = require('express')

const routes = Router()

routes.get('/hello', (request, response) => { 
   return response.json({ msg: 'hello world' })
})

routes.get('/hello2', (request, response) => {
   return response.json({ msg: 'hello world 2'})
})

module.exports = routes