// # localStorage get/set helpers
class LocalStorageDb{
    constructor(){
        //pass
    };


    // data in ls
    async setData(key, value) {
            localStorage.setItem(key , JSON.stringify(value));
            return true;
    }

     getData(key){
            const data=localStorage.getItem(key);
            return JSON.parse(data) || [ ];
    }

    removeItem(key){
        
        const data=localStorage.getItem(key);
            if(!data){
                console.warn(`No data found for key: ${key}`);
                localStorage.removeItem(data);
                return true;
            }
        
            console.error("Error removing item from localStorage", e);
        
    }
}

export const dataBase_ls=new LocalStorageDb();




const testProducts = [
  {
    Product_name: "Shampoo",
    Product_Title: "Herbal Anti-Dandruff Shampoo",
    Product_stock: 50,
    Product_category: "Hair Care",
    Product_price: 350
  },
  {
    Product_name: "Conditioner",
    Product_Title: "Silky Smooth Conditioner",
    Product_stock: 40,
    Product_category: "Hair Care",
    Product_price: 300
  },
  {
    Product_name: "Hair Oil",
    Product_Title: "Natural Coconut Hair Oil",
    Product_stock: 60,
    Product_category: "Hair Care",
    Product_price: 250
  },
  {
    Product_name: "Face Wash",
    Product_Title: "Vitamin C Face Wash",
    Product_stock: 45,
    Product_category: "Skin Care",
    Product_price: 280
  },
  {
    Product_name: "Face Cream",
    Product_Title: "Moisturizing Face Cream",
    Product_stock: 35,
    Product_category: "Skin Care",
    Product_price: 420
  },
  {
    Product_name: "Hair Gel",
    Product_Title: "Strong Hold Hair Gel",
    Product_stock: 55,
    Product_category: "Styling",
    Product_price: 200
  },
  {
    Product_name: "Hair Spray",
    Product_Title: "Long Lasting Hair Spray",
    Product_stock: 30,
    Product_category: "Styling",
    Product_price: 450
  },
  {
    Product_name: "Beard Oil",
    Product_Title: "Premium Beard Growth Oil",
    Product_stock: 25,
    Product_category: "Grooming",
    Product_price: 500
  },
  {
    Product_name: "Beard Wash",
    Product_Title: "Gentle Beard Wash",
    Product_stock: 20,
    Product_category: "Grooming",
    Product_price: 320
  },
  {
    Product_name: "Body Lotion",
    Product_Title: "Aloe Vera Body Lotion",
    Product_stock: 70,
    Product_category: "Body Care",
    Product_price: 380
  }
];
dataBase_ls.setData("products", testProducts);
// Initialize test data in localStorage if not present
