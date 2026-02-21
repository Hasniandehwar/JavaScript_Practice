
import{toggle_Dash_btns} from "../core/utils.js";
let Dash_btn=document.querySelector("#Dash_btn");
let products_btn=document.querySelector("#products_btn");




// Dash Btns
let Manage_store=document.querySelector("#Manage_store");
let btns_Drop=document.querySelector("#btns_Drop");

Manage_store.addEventListener("click", ()=>{
    toggle_Dash_btns(btns_Drop);
})
Dash_btn.addEventListener("click", ()=>{
    window.location.href="./dashboard.html";
});

products_btn.addEventListener("click", ()=>{
    window.location.href="./products.html";
})

let Product_manage_btn=document.querySelector("#Product");
let section_dashboard=document.querySelector(".section_dashboard2");
let Details=document.querySelector("#details")



Product_manage_btn.addEventListener("click" , ()=>{
            section_dashboard.classList.toggle("d-none");
            
            
});

Details.addEventListener("click" , ()=>{
            section_dashboard.classList.toggle("d-none");
            
})
