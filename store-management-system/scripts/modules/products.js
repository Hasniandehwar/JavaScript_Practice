import { dataBase_ls } from "../core/storage.js";
class Products {

    addProduct(obj) { // tested
        const products = dataBase_ls.getData("products");
        const marketcode = "SBM" + Date.now();

        const newProduct = {
            marketcode: marketcode,  // use the fixed code
            Product_name: obj.Product_name,
            Product_Title: obj.Product_Title,
            Product_stock: obj.Product_stock,
            Product_category: obj.Product_category,
            Product_price: obj.Product_price,
            products_images: obj.products_images
        };

        products.push(newProduct);
        dataBase_ls.setData("products", products);
        return newProduct;
    }

    getProducts() {
        return dataBase_ls.getData("products");
    }

    DeleteProduct(marketcode) { // tested
        const products = dataBase_ls.getData("products");
        const updatedProducts = products.filter(p => p.marketcode !== marketcode);
        dataBase_ls.setData("products", updatedProducts);
        return true;
    }
}


export  const product_ope= new Products();