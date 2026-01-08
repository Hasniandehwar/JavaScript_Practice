let form=document.querySelector("form");
let input=document.querySelectorAll(".inp");
let div=document.querySelector(".Intro");
let img=document.querySelector(".Image");
let main=document.querySelector(".Card");
let arr=[];// renderUI);
form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    let Name=e.target[0].value;
    let Fname=e.target[1].value;
    let cla=e.target[2].value;
    StoreData(Name , Fname , cla )
    render(arr)
})

function render(arr){
    main.textContent="";
    arr.forEach(element => {
        
        // <div class="View">
        //     <h1 class="Heading">Name: </h1>
        //     <h2 class="F">Father Name: </h2>
        //     <h2 class="C">Class : </h2>
        // </div> 
        let divs=document.createElement("div");
        divs.classList.add("View");
        let h1=document.createElement("h1");
        h1.classList.add("Heading");
        h1.textContent=element.N;
        divs.appendChild(h1);
        let h2=document.createElement("h2");
        h2.textContent=element.F;
        h2.classList.add("F");
        divs.appendChild(h2);
        let h31=document.createElement("h3");
        h31.textContent=element.C;
        h31.classList.add("C");
        divs.appendChild(h31);
        main.appendChild(divs);

        // remove BTN

        
    });
}
function StoreData(Name , Fname , Cla){
    arr.unshift({N : Name , F :Fname , C : Cla})
}

render(arr)