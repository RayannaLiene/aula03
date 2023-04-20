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

        const existsDescription = products.find(product => product.descricao.toLocaleLowerCase())
        if (existsDescription) {
            return response.status(400).json({
                error: 'Produto já cadastrado'
            })
        }

        const product = {
            id,
            descricao,
            valor,
            qtde
        }

        products.push(product)
        
        return response.json({data: products})
    },

    async getListOfCart(request, response) {
        return response.json({ data: products})
    },

    async createUserCart(request, response) {

        const { item } = request.body


        for (const product of product) {
            const productExists = products.find(prd => prd.id === product.id)
           
            if (!productExists) {
               return response.status(400).json({
                error: 'Produto não encontrado'
               })
            }
        }

        if (product.qtde > productsExists.qtde) {
            return response.status(400).json({
                error: 'Quantidade não disponivel'
            })
        }

        const useritens = {
            productId: productExists.id,
            descricao: productExists.descricao,
            qtde: product.qtde,
            valor: product.qtde * productExists.valor
        }

       userCart.push(userItens) 

       const index = products.findIndex(idx => idx.id === product.id)
       products[index].qtde = products[index].qtde - product.qtde
       //products[index].qtde -= product.qtde -> decremento
       //products[index].qtde += product.qtde -> incremento
    
       return response.json({
        order: userCart,
        stock: products
       })





        return response.json({ data: true})
    }
}