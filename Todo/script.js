// const { createElement } = require("react");

// Header
let title=document.querySelector("title");
title.textContent="Todoapp";

let header=document.querySelector(".head");

let h1_header=document.createElement("h1");
header.appendChild(h1_header);
h1_header.classList.add("h1");
h1_header.textContent="TodoApp";
//  header end

// //<div class="input"> <form action="#" >
//                     <input type="text" placeholder="Enter the Task">
//                     <button type="submit">Add Task</button>
//                 </form>
//           </div>

// main  

let main=document.querySelector(".main");
let div=document.createElement("div");
main.appendChild(div);
div.classList.add("main_child");


let div_child=document.createElement("div");
div.classList.add("input");
div.appendChild(div_child);


let form=document.createElement("form");
div_child.appendChild(form);

let input=document.createElement("input");
input.setAttribute("type" , "text");
input.setAttribute("placeholder" , "Enter the Tasks");
form.appendChild(input);
input.classList.add("input");

let btn=document.createElement("button");
btn.setAttribute("type" , "submit");
btn.textContent="Add Task";
form.appendChild(btn);

let ul=document.createElement("div");
div_child.appendChild(ul);
ul.classList.add("ul");
let list=document.createElement("ul");
    ul.appendChild(list);
    ul.classList.add("list")

form.addEventListener("submit" ,function(dets){
    dets.preventDefault();
    let value=input.value;
    let Tasks=[];
    Tasks.push(value);
    
    let li=document.createElement("li");
    list.appendChild(li)
    li.classList.add("list_item");

    li.addEventListener("click" , function(dets){
        li.classList.toggle("list2")
    })

    
   
    Tasks.forEach((value)=>{
        li.textContent=value       
})

})









