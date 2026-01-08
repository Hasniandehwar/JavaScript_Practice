const tableBody = document.querySelector('#studentTable');
const addStudentForm = document.querySelector('#studentForm');
let names=document.querySelector("#studentForm #name");
let roll=document.querySelector("#studentForm #roll");
addStudentForm.addEventListener("submit", function(event){
    event.preventDefault();
    addStudent(names.value, roll.value);
    addStudentForm.reset();
})

// Function to add a new student
const students = [
    {id:0, name: "John Doe", roll: "101"},
    {id:1, name: "Jane Smith", roll: "102"},
    {id:2, name: "Alice Johnson", roll: "103"},

];
function addStudent(name, roll) {
    const newStudent = {
        id: students.length,
        name: name,
        roll: roll
    }
    students.push(newStudent);
    RenderUI(students);
}


// Function to render the UI

function RenderUI(students){
    tableBody.innerHTML = "";
    if (students.length === 0) {
        document.querySelector(".empty").textContent="No Students Found";
    
    }else{
        document.querySelector(".empty").textContent="Students Records"
         students.forEach((student, index) => {
            const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td><button  class="delete-btn">Delete</button></td>
            
        `;
        tableBody.appendChild(row);
    });
};
    
}

tableBody.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-btn")){
        const index = e.target.dataset.index;
        deleteStudent(index);
    }
});

function deleteStudent(index){
    students.splice(index, 1); 
    RenderUI(students);
}
RenderUI(students);