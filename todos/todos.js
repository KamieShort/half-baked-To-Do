import {
    // checkAuth,
    redirectIfLoggedIn,
    signInUser,
    signupUser,
    // createToDo,
    completeToDo,
    // deleteAllTodos,
    getTodos,
    logout,
} from '../fetch-utils.js';

import { renderToDo } from '../render-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// if user currently logged in, redirect
// redirectIfLoggedIn();

logoutButton.addEventListener('click', () => {
    logout();
});

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

export async function renderToDos() {
    const toDoslist = document.getElementById('todo-list');
    toDoslist.textContent = '';
    const todos = await getTodos();
    for (let todo of todos) {
        const li = renderToDo(todo);
        li.addEventListener('click', async () => {
            await completeToDo(todo.id);
            renderToDos();
        });
        toDoslist.append(li);
    }
}
renderToDos();
