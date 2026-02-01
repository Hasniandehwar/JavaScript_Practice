const div_u=document.querySelector("#Used")
const Budget_text=document.querySelector(".text");
ui()
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
const div_cont=document.querySelector(".div");
let Budgetamount=0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    ui();
    const value = Number(BudgetInput.value);
    if ((value >= 1000)) {
        const modu=document.querySelector(".popup")
        let Budgetamount_l=get_bud();
        
        Budgetamount_l+= value;
        budget(Budgetamount_l)
        ui()
        setTimeout(()=>{
            setTimeout(()=>{
                Form_container.classList.add("d-none")
                div_cont.classList.toggle("d-none");
            } ,10)
            
            modu.classList.remove("d-none");  
        }, 500)
        
    }else{
        small2.textContent = "Amount must be at least 1000";
        small2.className="d-flex text-white";
        setTimeout(()=>{
            small2.className="d-none";
        } , 3000);
    }

});
function budget(Budgetamount){
    Budgetamount_=JSON.stringify(Budgetamount);
    localStorage.setItem("budgetamount" , Budgetamount_)
}
function get_bud(){
    const amount_=localStorage.getItem("budgetamount");
    let realbudget=JSON.parse(amount_)
    return Number(realbudget);   
}
// Add_Budget BTN
// const Budget_text=document.querySelector(".text");
const Add_Budget_btn=document.querySelector("#Add_Budget");
const Main_div_=document.querySelector("#Main_div");
const Form_container=document.querySelector("#Form_container");
const popcontainer=document.querySelector(".popup");
const card_text=document.querySelector(".card_text");

Add_Budget_btn.addEventListener("click" , ()=>{
    Add_Budget();
});

function Add_Budget(){
    Form_container.classList.remove("d-none");
    Main_div_.classList.toggle("d-none");
    ui()
}
function ui(){
        let lc=get_bud();
        Budget_text.textContent=`BudGet ${"Rs" + " " + lc}`;
        let us=get_use_a();
        div_u.textContent=`Expences Rs: ${" " + us}`

}
function returnHomepage(){
    setTimeout(()=>{
        
        Main_div_.classList.toggle("d-none");
        popcontainer.classList.toggle("d-none");
        div_cont.classList.toggle("d-none");
    }, 500);
}

// ok btn in mod
const ok_btn_popup=document.querySelector(".ok");
ok_btn_popup.addEventListener("click" , ()=>{
    returnHomepage();
    ui()
})


// Expense Form
const form_expense=document.querySelector("#form_expense");
const Expense_amount=document.querySelector("#Expense_amount");
const expense_type=document.querySelector("#expense_type");
const add_expense=document.querySelector("#add_expense");
const Form_conatiner_exp=document.querySelector("#Form_conatiner_exp");
//showing deatils
const expenceamount=document.querySelector(".amount")
const total_budget=document.querySelector(".total_Amount");
const Remaing=document.querySelector(".Remaing");
const div_container=document.querySelector("#cont")
form_expense.addEventListener("submit" , function(e){
    e.preventDefault();  
    div_container.classList.toggle("d-none")
    let type=expense_type.value;
    let amount=Expense_amount.value;
    let obj={
        amount,
        type
    };
    expense(obj);

})
add_expense.addEventListener("click" , ()=>{
    display_form();
})
function display_form(){
    Main_div_.classList.toggle("d-none");
    Form_conatiner_exp.classList.toggle("d-none");
}

const checked_btn=document.querySelector(".checked");
checked_btn.addEventListener("click" , ()=>{
    Form_conatiner_exp.classList.toggle("d-none");
    Main_div_.classList.toggle("d-none");
    div_container.classList.toggle("d-none");
})

function expense(obj){

    total_budget.textContent=`Amount : ${Number(obj.amount)}`;
    expenceamount.textContent=`Expence : ${obj.type}`;
    let Actual_amount=get_bud();
    Remaing.textContent=`Amount Remaning in budget : ${Actual_amount-= Number(obj.amount)}`
    let get_used=get_use_a();
    get_used=get_used+Number(obj.amount);
    set_use_amount(get_used)
    budget( Number(Actual_amount));
    ui()
}

function set_use_amount(amountused=40){

    let j=JSON.stringify(amountused)
    localStorage.setItem("amountused" , j)
    
}

function get_use_a(){
    const a_D=localStorage.getItem("amountused");
    let Used_amount=JSON.parse(a_D)
    return Number(Used_amount);
}