const SUPABASE_URL = 'https://mjukwettrllpfumtwijm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdWt3ZXR0cmxscGZ1bXR3aWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1MzEwMzMsImV4cCI6MTk2MDEwNzAzM30.VlBzi13QTeywkUF1tXU8yRtqiGbDi25VyV5V__o3rk4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// create a single incomplete todo with the correct 'todo' property for this user in supabase
export async function createToDo(todo) {
    const resp = await client
        .from('todos')
        .insert({ description: todo, complete: false, user_id: client.auth.user().id });
    console.log(resp);
    return checkError(resp);
}

// delete all todos for this user in supabase
export async function deleteAllTodos() {
    const resp = await client.from('todos').delete().match({ user_id: client.auth.user().id });
    return checkError(resp);
}

// get all todos for this user from supabase
export async function getTodos() {
    const resp = await client.from('todos').select().order('id');
    console.log(resp);
    return checkError(resp);
}

// find the and update (set complete to true), the todo that matches the correct id
export async function completeToDo(id) {
    const resp = client.from('todos').update({ complete: true }).match({ id });
    return checkError(resp);
}

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
