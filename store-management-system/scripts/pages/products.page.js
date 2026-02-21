import {product_ope} from "../modules/products.js";
import {stock_ope} from "../modules/stock.js";
import { dataBase_ls } from "../core/storage.js";
import{toggle_Dash_btns} from "../core/utils.js";


// Dash Btns
let Manage_store=document.querySelector("#Manage_store");
let btns_Drop=document.querySelector("#btns_Drop");

Manage_store.addEventListener("click", ()=>{
    toggle_Dash_btns(btns_Drop);
})

// BTns routes
let orders_btn=document.querySelector("#orders_btn");
let Dash_btn=document.querySelector("#Dash_btn");



orders_btn.addEventListener("click", ()=>{
    window.location.href="./orders.html";

});

Dash_btn.addEventListener("click", ()=>{
    window.location.href="./dashboard.html";
});


let Product_manage_btn=document.querySelector("#Product");
let section_dashboard=document.querySelector(".Div2");
let Details=document.querySelector("#details")



Product_manage_btn.addEventListener("click" , ()=>{
            section_dashboard.classList.toggle("d-none");
            
            
});

Details.addEventListener("click" , ()=>{
            section_dashboard.classList.toggle("d-none");
           
})
