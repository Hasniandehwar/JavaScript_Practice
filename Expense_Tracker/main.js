const menuicon=document.querySelector(".bi");
const side_bar=document.querySelector(".side_bar")
const div=document.querySelector(".div");
const column=document.querySelector("#cloumn")
const btns=document.querySelector("#btns")
menuicon.addEventListener("click" , ()=>{
    
    if (menuicon.classList.contains("bi-list")){
        side_bar.className="d-flex  d-md-block d-lg-block col-lg-2 col-md-3 side_bar ";
        div.className="col-md-7 col-lg-9 div ms-md-3 ms-p-3 mt-3 border rounded-3"
        menuicon.className="bi bi-x d-lg-none";
        column.className="flex-row";
    } else{
        side_bar.className = "d-none  d-md-block d-lg-block col-lg-2 col-md-3 side_bar";
        div.className = "col-md-7 col-lg-9 div ms-md-3 ms-p-3 mt-3 border rounded-3";
        menuicon.className="d-lg-none d-md-none bi bi-list";
  }  
})
// Form handling
const Submitbtn = document.querySelector("#Submit");
const BudgetInput = document.querySelector("#Budget_amount");
const budgetDate = document.querySelector("#Budget_Date");
const form = document.querySelector("#form_budget");

const div_date = document.querySelector("#Budget_Date_div");
const div_amount = document.querySelector("#Budget_amount_div");

const small = document.createElement("small");
small.className = "mt-3 ms-2 text-white";
small.style.display = "none";
div_date.appendChild(small);

const small2 = document.createElement("small");
small2.className = "mt-3 ms-2 text-white";
small2.style.display = "none";
div_amount.appendChild(small2);

let dateTimeout;
let amountTimeout;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const testdate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(budgetDate.value);
    const testamount = /^(?:[1-9]\d{3,9})$/.test(BudgetInput.value);

    // DATE validation
    if (testdate) {
        small.innerText = "Please Choose a Valid Date (MM/DD/YYYY)";
        small.style.display = "block";
        setTimeout(() => {
            small.style.display = "none";
        }, 5000);
    }

    // AMOUNT validation
    if (testamount) {
        small2.innerText = "Please Enter Amount Greater Than 1000";
        small2.style.display = "block";
        setTimeout(() => {
            small2.style.display = "none";
        }, 5000);
    }

    if (testdate && testamount) {
        alert("Form Submitted!");
        form.reset();
    }
});
