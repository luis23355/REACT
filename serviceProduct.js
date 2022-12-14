const faker = require('faker');

class ProductsService{

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){
        const limit= 100;
        for (let i = 0; i < limit; i++) {
            this.product.push({

                name: faker.commerce.productoName(),
                price: parseInt(faker.commerce.price(),10),
                image:faker.image.imageUrl()
            });
            
        }
    }
async create(data){
    const newProduct = {
        id: faker.datatype.uuid(),
        ...data
    }
    this.products.push(newProduct);
    return newProduct;

}

find(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(this.product);
        }, 5000);
    })
    
}

async finOne(id){
    const name= this.getTotal();
    return this.products.find(item => item.id === id);
}

async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
        throw new Error('no existe el producto,error desde update');
    }
    const product = this.products[index];
    this.products[index] = {
        ...product,
        ...changes
    };
    return this.products[index];
}
async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
        throw new Error('Error desde delete');
    }
    this.products.splice(index,1);
    return {id};

}


}



module.exports = ProductsService;