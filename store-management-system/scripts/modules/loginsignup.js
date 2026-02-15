import {Signupvalidate, Loginvalidate  , toggle_from} from "../core/utils.js";
import { dataBase_ls } from "../core/storage.js";


// form divs
let Login_Section_From=document.querySelector(".Login_Section_From");
let Signup_Section_From=document.querySelector(".Signup_Section_From");


// Form
let Login_form=document.querySelector(".Login_form");
let Signup_form=document.querySelector(".Signup_form");

// BTNS & LINKS
let login_btn_navi=document.querySelector(".login_btn_navi");
let Signup_navi=document.querySelector(".Signup_navi");

//INputs &  error Field:
let email=document.querySelector("#email");
let password=document.querySelector("#password");

let errormsg=document.querySelector(".errormsg");


let email_signup=document.querySelector("#email_signup");
let password_signup=document.querySelector("#password_signup");
let errormsgs=document.querySelector(".errormsgs")
//  Toggle Forms
Signup_navi.addEventListener("click" , ()=>{
    const element={Login_Section_From , Signup_Section_From}
    toggle_from(element)
 
})
login_btn_navi.addEventListener("click" , ()=>{
       const element={Login_Section_From , Signup_Section_From}
       toggle_from(element)
})

// form Submit Event
Login_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailvalue = email.value;
    let passValue = password.value;

    let response = Loginvalidate(emailvalue, passValue);

    if (response.success === false) {
        errormsg.textContent = response.message;

    }else{ 
        setTimeout(() => {
            window.location.replace("./dashboard.html");
        }, 1000);
    }
    
});



Signup_form.addEventListener("submit" , (e)=>{
        e.preventDefault();
        let email = email_signup.value;
        let password = password_signup.value;
        let response = Signupvalidate({email, password});
         if (response.success === false) {
                errormsgs.textContent=response.message;
            
            setTimeout(()=>{
                errormsgs.textContent="";
            },5000)
        }else{
            
            errormsgs.textContent=response.message
            let timeout=2000
            setTimeout(() => {
                 errormsgs.textContent="";
            }, timeout);
        }
})
