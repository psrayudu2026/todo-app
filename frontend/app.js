const API = 'http://localhost:3000';

async function fetchTodos() {
  const res = await fetch(`${API}/todos`);
  const todos = await res.json();
  render(todos);
}

async function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;
  await fetch(`${API}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  input.value = '';
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/todos/${id}`, { method: 'DELETE' });
  fetchTodos();
}

function render(todos) {
  const list = document.getElementById('todoList');
  const empty = document.getElementById('emptyMsg');
  list.innerHTML = todos.map(t => `
    <li>
      <span>${escapeHtml(t.text)}</span>
      <button onclick="deleteTodo(${t.id})" aria-label="Delete todo">✕</button>
    </li>
  `).join('');
  empty.style.display = todos.length === 0 ? 'block' : 'none';
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.getElementById('todoInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTodo();
});

fetchTodos();
