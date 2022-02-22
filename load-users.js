// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(photos => photos.json())
        .then(json => console.log(json))

}
getPhotos();

function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => displayTodos(data))
}
getTodos();


function displayTodos(data) {
    const ol = document.getElementById("todoList");
    for (const todos of data) {
        console.log(todos.title);
        const li = document.createElement('li');
        li.innerText = todos.title;
        ol.appendChild(li);
    }
}


