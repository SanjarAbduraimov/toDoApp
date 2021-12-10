const todoContainer = document.querySelector(".todo__wrapper");
const form = document.forms[0];
const title = form.title;
const add = document.querySelector(".add");
const icon = document.querySelector(".icon");
const toDoApp = document.querySelector(".toDoApp");
const database = [];

function Car(title) {
  this.id = Date.now();
  this.title = title;
  this.updatedAt = new Date();
}


function addToDo(e) {
  let car = new Car(title.value);
  database.push(car);
  display();
  title.value = ""
};

function display() {
  let htmlContent = '';
  for (let i = 0; i < database.length; i++) {
    htmlContent += `
    <li data-id=${database[i].id} class="todo__item">
      <p>${database[i].title}</p>
      <div class="edit__wrapper">
        <i data-id=${database[i].id} class="fas fa-pen" onclick="editToDo(this)"></i>
      </div>
  </li>
    `
  }
  todoContainer.innerHTML = htmlContent;
}

function editToDo(e) {
  let id = e.parentElement.parentElement.dataset.id
  console.log(id);
  let toDo = database.find((item) => {
    return item.id == id
  })
  let title = prompt("edit a to do", toDo.title)
  toDo.title = title;
  toDo.updatedAt = new Date();
  display();
}

document.addEventListener("DOMContentLoaded", function (event) {
  display();
  const edit = document.querySelectorAll(".edit__wrapper>i.fa-pen");
  console.log(edit);
  // edit.forEach(function (item, index) {
  //   item.onclick = function () {
  //     console.log(item.parentElement.parentElement.dataset.id);
  //   }
  // })
})
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addToDo()
  form.style.display = "none";
})



add.addEventListener("click",(event)=>{
  event.preventDefault()
  form.style.display = "block";
})

let x = 1;
icon.addEventListener("click",event => {
  event.preventDefault()
  if (x==1){
    toDoApp.style.display = "block";
    x=0
  }else{
    toDoApp.style.display = "none";  
    x=1 
  }
})


