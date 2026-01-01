
let div=document.querySelector(".div_1");
let aside=document.querySelector("aside");
div.addEventListener("click" , ()=>{
    aside.classList.toggle("a")
          
})


let form=document.querySelector("form");
let btn=document.querySelector("#submitbtn");

let picbtn=document.querySelector(".Btn");

let input=document.querySelectorAll(".inp")


picbtn.addEventListener("click" , ()=>{
    document.querySelector(".pic").click()
});
const stu=[]

form.addEventListener("submit", (req)=>{
    req.preventDefault();
    let name=input[0].value;
    let lastname=input[1].value;
    let Cnic=input[2].value;
    let Class=input[3].value;
    let father=input[4].value;
    let image=input[5].value
    
    const regexname= /^[A-Za-z]{2,}$/;
    const regexL=/^[A-Za-z]{2,}$/;
    const cnicP= /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    let ntest= regexname.test(name);
    let l=regexL.test(lastname);
    let c=cnicP.test(Cnic);
    let fname=/^[A-Za-z]+(?: [A-Za-z]+)*$/;
    let fa=fname.test(father);
    let im=/\.(jpg|jpeg|png|webp)$/
    let ima=im.test(image)
    
    
    if(!ntest){
        document.querySelector("#Name").setAttribute("placeholder" , "Please Follow The Pattren");
        alert("Please Follow The Pattren");
    }
    if(!l){
        alert("Please Follow The Pattren in last name");
    }
    if(!c) {
        document.querySelector("#CNIC").setAttribute("placeholder" , "Please Follow The Pattren");
        alert("Please Enter Correct Cnic Number");
    }
    if (Class.value === undefined && Class.value=== null){
        alert("Please Enter Correct Cnic Number");
    }
    if (!fa){
        document.querySelector("#Fname").setAttribute("placeholder" , "Please Follow The Pattren")
        alert("Please Follow The Pattren");
    }
    if(!ima){
        alert("Please choose a image")
    }
    stu.push(name , lastname , Cnic , Class , father , image);
    
});


    jason=JSON.stringify(stu);
    sessionStorage.setItem('Student' , jason);
    
    let data=JSON.parse(sessionStorage.getItem("Student"))
    console.log(data)



// 
//   bfromNumber: /^[0-9]{8,15}$/, 
//   
//   dob: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/,
//   
//   
// };