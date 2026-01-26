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
// form handling 
const Submitbtn=document.querySelector("#Submit");
const BudgetInput=document.querySelector("#Budget_amount");
const budgetDate=document.querySelector("#Budget_Date");
const form=document.querySelector("#form_budget");
const total_budget=0;

// form Event Submit arrow function
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    // form validation 
        // Elements that indicate when from fileds are not valid
    const div=document.querySelector("#Budget_Date_div");
    const div_amount=document.querySelector("#Budget_amount")
    const small=document.createElement("small");
    small.className="mt-3 ms-2 text-white"
    const small2 = document.createElement("small");
    small2.className = "mt-3 ms-2 text-white";
    // regexes
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    const amountRegex = /^(?:[1-9]\d{3,9})$/;
    const testdate=dateRegex.test(budgetDate.value);
    const testamount=amountRegex.test(BudgetInput.value);

    let dateTimeout;
    let amountTimeout;

    if (!testdate) {
        div.appendChild(small);
        small.style.display = "block";
        small.innerText = "Please Choose";

        clearTimeout(dateTimeout);
        dateTimeout = setTimeout(() => {
            small.style.display = "none";
        }, 1000);
    } else {
        clearTimeout(dateTimeout);
        small.style.display = "none";
    }

    if (!testamount) {
        div_amount.appendChild(small2);
        small2.style.display = "block";
        small2.innerText = "Please Enter Amount Greater Than 1000";

        clearTimeout(amountTimeout);
        amountTimeout = setTimeout(() => {
        small2.style.display = "none";
        }, 1000);
    } else {
        clearTimeout(amountTimeout);
        small2.style.display = "none";
    }

})