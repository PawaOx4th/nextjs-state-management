export async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');

  return response.json();
}
