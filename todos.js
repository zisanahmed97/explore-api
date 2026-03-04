const todoList = () =>{
    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayTodos(data);
    })
}


// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false

const displayTodos = (todos) =>{
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML ="";


   todos.forEach(todo =>{
    const todoCard = document.createElement("div");
    todoCard.innerHTML =`
    <div class="todo-card">
            <h2>${todo.title}</h2>
            <p>${todo.completed == true ? `<i class="fa-solid fa-circle-check"></i>` : `<i class="fa-regular fa-circle-check"></i>`}</p>
        </div>
    
    `
   todoContainer.append(todoCard);
   })
}
todoList();