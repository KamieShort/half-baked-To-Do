import {
    checkAuth,
    createToDo,
    completeToDo,
    deleteAllTodos,
    getTodos,
    logout,
} from '../fetch-utils.js';

import { renderToDo } from '../render-utils.js';

checkAuth();

// const todosEl = document.querySelector('.todos');
const form = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

async function renderToDos() {
    const toDosList = document.getElementById('todo-list');
    toDosList.textContent = '';
    const todos = await getTodos();
    for (let todo of todos) {
        const li = renderToDo(todo);
        li.addEventListener('click', async () => {
            await completeToDo(todo.id);
            renderToDos();
        });
        toDosList.append(li);
    }
}
renderToDos();

// on submit, create a todo, reset the form, and display the todos
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const todo = data.get('todo');
    await createToDo(todo);
    renderToDos();
    form.reset();
});

logoutButton.addEventListener('click', () => {
    logout();
});

// delete all todos
// then refetch and display the updated list of todos
deleteButton.addEventListener('click', async () => {
    await deleteAllTodos();
    renderToDos();
});
