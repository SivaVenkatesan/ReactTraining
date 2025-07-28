export async function fetchUsers() {
    //fetch users from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}