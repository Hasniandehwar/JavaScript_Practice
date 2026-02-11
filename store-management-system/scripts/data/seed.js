// # initial products (first run)
import { dataBase_ls } from "../core/storage.js";

// Immediately load products from localStorage
const products = (() => {
    const data = dataBase_ls.getData("products"); // fetch from localStorage
    if (!data || data.length === 0) {
        console.log("No products found in local storage.");
        return [];
    }
    return data; // this will be assigned to 'products'
})();
;