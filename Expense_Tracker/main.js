const menuicon=document.querySelector("#Menuicon");
const side_bar=document.querySelector(".side_bar")
const div=document.querySelector(".div");
const column=document.querySelector("#cloumn")
const btns=document.querySelector("#btns")
menuicon.addEventListener("click" , ()=>{
    
    if (menuicon.classList.contains("bi-list")){
        side_bar.className="d-flex  d-md-block d-lg-block col-lg-2 col-md-3 side_bar";
        div.className="col-md-7 col-lg-9 div ms-md-3 ms-p-3 mt-3 border rounded-3"
        menuicon.className="bi bi-x d-lg-none";
        column.className="flex-row";
    } else{
        side_bar.className = "d-none  d-md-block d-lg-block col-lg-2 col-md-3 side_bar";
        div.className = "col-md-7 col-lg-9 div ms-md-3 ms-p-3 mt-3 border rounded-3";
        menuicon.className="d-lg-none d-md-none bi bi-list";
  }  
})
// Form for Adding Budget
// Form handling
const Submitbtn = document.querySelector("#Submit");
const BudgetInput = document.querySelector("#Budget_amount");
const budgetDate = document.querySelector("#Budget_Date");
const form = document.querySelector("#form_budget");

const div_date = document.querySelector("#Budget_Date_div");
const div_amount = document.querySelector("#Budget_amount_div");

const small = document.createElement("small");
small.className = "mt-3 ms-2 text-white d-none";
div_date.appendChild(small);

const small2 = document.createElement("small");
small2.className = "mt-3 ms-2 text-white d-none";
div_amount.appendChild(small2);

let Budgetamount = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = Number(BudgetInput.value);
    if ((value >= 1000)) {
        const modu=document.querySelector(".popup")
        Budgetamount += value;
        console.log(Budgetamount);
        setTimeout(()=>{
            setTimeout(()=>{
                Form_container.classList.add("d-none")
            } , 100)
            
            modu.classList.remove("d-none");  
        }, 500)
        // page return to Dash
    }else{
        small2.textContent = "Amount must be at least 1000";
        small2.className="d-flex text-white";
        setTimeout(()=>{
            small2.className="d-none";
        } , 3000);
    }

});

// Add_Budget BTN
const Add_Budget_btn=document.querySelector("#Add_Budget");
const Main_div_=document.querySelector("#Main_div");
const Form_container=document.querySelector("#Form_container");
const popcontainer=document.querySelector(".popup")
Add_Budget_btn.addEventListener("click" , ()=>{
    Add_Budget();
});

function Add_Budget(){
    Form_container.classList.remove("d-none");
    Main_div_.classList.toggle("d-none");
}

function returnHomepage(){
    setTimeout(()=>{
        Main_div_.classList.toggle("d-none");
        popcontainer.classList.toggle("d-none");
    }, 500);
}

// ok btn in mod
const ok_btn_popup=document.querySelector(".ok");
ok_btn_popup.addEventListener("click" , ()=>{
    returnHomepage();
})
