const products = [
    { 
        id: 1,
        descrição: 'coca cola 2lts',
        valor: 10.00,
        qtde: 10
    },
{       id: 2,
        descrição: 'cerveja',
        valor: 5.88,
        qtde: 50

},
{       id: 3,
        descrição: 'agua',
        valor: 2.00,
        qtde: 5

}
]

module.exports = {
    async createCart(request, response) {

        const { id, descricao, valor, qtde } = request.body

        const existsProduct = products.find(product => product.id === id)

        console.log(existsProduct)
        if (existsProduct) {
            
              return response.status(400).Json({
                error: 'Produto já cadastrado'
              })
        }

        products.push({
            id,
            descricao,
            valor,
            qtde
        
        })

        return response.json({data: products})
    },

    async hello2(request, response) {
        return response.json({ msg: 'hello world'})
    }
}