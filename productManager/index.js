const path = require("path");

const ProductManager = require('./productManager');
const { isNull } = require("util");


const projectProducts = async() =>{
    console.log("Iniciando el proyecto manejador de productos");
    try{
        const pathBase = path.join(__dirname,"dbProducts.json");
        const manager = new ProductManager(pathBase);
        const addProduct = {
            titulo: "Gorro",
            descripcion: "Vicera plana NY Yankees",
            precio: 520,
            thumbnail: "imagen4.jpg",
            stock: 4030,
            codigo: "IQSA43",
        };

        //Creacion de productos
         const newProduct = await manager.createProduct(addProduct);
        //console.log(newProduct)
        let products = await manager.getProducts();

        //Busqueda de producto por id
        const productoConId2 = await manager.getProductById(5)
        console.log(productoConId2)

        //Actualizacion del producto

        await manager.updateProduct(2,"descripcion","JBL Bluetooth")
        console.log(productoConId2)

        //Eliminaciones  
        products = await manager.getProducts();
        console.log("Antes de eliminar")
        console.log(products)
        await manager.deleteProduct(1)
        await manager.deleteProduct(6)
        console.log("------------------------------------------")
          products = await manager.getProducts();
          console.log("Despues de eliminar")
          console.log(products)
        
        //console.log(productoConId2)
    }catch(error){
        console.log(error)
    }

}

projectProducts();