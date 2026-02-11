// # stock update logic
import { dataBase_ls } from "../core/storage.js";

class Stocks{
    constructor(){
        // pass
    }

    getStock(){
        let data=dataBase_ls.getData("products");
        return data 
    }

    updateStock(pro_name){
        let data=this.getStock();
        const updatedStock= data.filter(function(Product){
            if(Product.Product_name===pro_name)
        });
    }
}

let p1=new Stocks();
p1.updateStock("Apple")