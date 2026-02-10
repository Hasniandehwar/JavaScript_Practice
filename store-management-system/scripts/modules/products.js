// # add/update/delete products
import {dataBase_ls} from "../core/storage.js";


class Products{
    constructor(Product_name, Product_Title , Product_stock , Product_category , Product_price , products_images=[]){
        this.Product_name=Product_name;
        this.Product_Title=Product_Title;
        this.Product_stock=Product_stock; 
        this.Product_category=Product_category;
        this.Product_price=Product_price;   
        this.products_images=products_images; // array of images

    }
    async addProduct(){
            const products =  dataBase_ls.getData("products");
            const marketcode=Math.floor(Math.random() * 10000); // generate random marketcode
            const newProduct = {
                marketcode:"SBM"+marketcode,
                Product_name:this.Product_name,
                Product_Title:this.Product_Title,
                Product_stock:this.Product_stock,
                Product_category:this.Product_category,
                Product_price:this.Product_price,
                products_images: this.products_images /// must be 3 pictures only

            };
            products.push(newProduct);
            dataBase_ls.setData("products", products); // stroring data in ls
            console.log(products)
            return true;
}
    // get all products
        getProducts(){
            const products = dataBase_ls.getData("products");
            return products;
        }

    // delete Products
        DeleteProduct(marketcode){
            const products = dataBase_ls.getData("products");
            const updatedProducts = products.filter(p => p.marketcode !== marketcode);
            dataBase_ls.setData("products", updatedProducts);
            return true;
        }


}

// create instance
const p1 = new Products();

// add product

// get all products
console.log(p1.getProducts());

p1.DeleteProduct("SBM5505"); // example marketcode to delete

export default Products;