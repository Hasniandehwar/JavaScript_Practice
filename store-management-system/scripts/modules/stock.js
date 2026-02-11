// stock update logic
import { dataBase_ls } from "../core/storage.js";

class Stocks {
    constructor() {
        // pass
    }

    getStock() { // tested
        let data = dataBase_ls.getData("products");
        return data;
    }

    getStockByName(pro_name){ // tested
        let data = dataBase_ls.getData("products");
        if (pro_name) {
            const product = data.find(Product => 
                Product.Product_name === pro_name
            );
            return product ? product.Product_stock : null;
        }
    }

    addStock(pro_name, stock) { // pro_name is the name of the product, stock is the amount to add
        let data = this.getStock();

        const updatedStock = data.map(Product => {
            if (Product.Product_name === pro_name) {
                Product.Product_stock += stock;
            }
            return Product;
        });

        dataBase_ls.setData("products", updatedStock);
        return true;
    }

    PurchasedStock(pro_name, stock) { // tested
        let data = this.getStock();

        const updatedStock = data.map(Product => {
            if (Product.Product_name === pro_name) {
                Product.Product_stock -= stock;
            }
            return Product;
        });

        dataBase_ls.setData("products", updatedStock);
        return true;
    }
}

export const stock_ope = new Stocks();

// test