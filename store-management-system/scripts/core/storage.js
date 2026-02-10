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
