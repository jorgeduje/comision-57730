// CRUD - ABM

// obtener todos

// fetch(endpoint, {configuracion} )

let todos = [];

let getTodos = fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "GET",
}); // get

getTodos
  .then((res) => res.json())
  .then((res) => {
    todos = res;
  })
  .catch((error) => console.log(error))
  .finally(() => console.log(todos));

// obtener un todo
const obtenerTodo = (id) => {
  let getTodo = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  getTodo
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

const btnGetTodo = document.getElementById("btn-todo");
btnGetTodo.addEventListener("click", () => {
  obtenerTodo(3);
});

// crear
// {title, id ...}
const crearTodo = (todo) => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: { Authorization: "dadsadddsadsadasdasdadsad" },
    body: JSON.stringify(todo),
  });
};
const btnCreate = document.getElementById("btn-create");
btnCreate.addEventListener("click", () => {
  crearTodo({
    userId: 1,
    title: "Nueva tarea",
    completed: true,
  });
});

// borrar

const borrarTodo = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  });
};
const btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click", () => {
  borrarTodo(5);
});

// actualizar

// const actualizarTodo = (id, nuevoTodo) => {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(nuevoTodo),
//   });
// };

// const btnUpdate = document.getElementById("btn-update");
// btnUpdate.addEventListener("click", () => {
//   actualizarTodo(2, { userId: 1, title: "title cambiado", completed: true });
// });
// [
//   {},
//   {}, // --> remplazar {}
//   {},
// ];
const actualizarTodo = (id, nuevoTodo) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(nuevoTodo),
  });
};

const btnUpdate = document.getElementById("btn-update");
btnUpdate.addEventListener("click", () => {
  actualizarTodo(2, { title: "title cambiado", userId: 2 });
});
// [
//   {},
//   {}, // --> parchar {}
//   {},
// ];
