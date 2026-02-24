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
// Charts
let chart2=document.querySelector("#chart2");
new Chart(chart2, {
    type: 'bar',   // bar | line | pie | doughnut
    data: {
        labels: ['Laptop', 'Mobile', 'Tablet', 'TV', 'Camera'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 7, 5, 9],
            backgroundColor: [
                '#198754',
                '#0d6efd',
                '#ffc107',
                '#dc3545',
                '#6f42c1'
            ]
        }],
        
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
            display: true,
            text: 'Sales'
        }
        }
    }
});

// BTns routes
let products_btn=document.querySelector("#products_btn");
let orders_btn=document.querySelector("#orders_btn");
let Dash_btn=document.querySelector("#Dash_btn");

products_btn.addEventListener("click", ()=>{
    window.location.href="./products.html";
})

orders_btn.addEventListener("click", ()=>{
    window.location.href="./orders.html";
});

Dash_btn.addEventListener("click", ()=>{
    window.location.href="./dashboard.html";
});


//  Select Product manage
let Product_manage_btn=document.querySelector("#Product");
let section_dashboard=document.querySelector(".Div2");
let Chart_section=document.querySelector(".board")




Product_manage_btn.addEventListener("click" , ()=>{
            section_dashboard.classList.toggle("d-none");
            Chart_section.classList.toggle("d-none");
            
});



let Product=document.querySelector("#Product");


Product.addEventListener("click" , ()=>{
    window.location.href="./productform.html"
})
