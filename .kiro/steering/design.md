# Design

## Architecture

```
Browser (frontend/index.html)
        |
        | HTTP (fetch)
        v
Express Server (backend/server.js) :3000
        |
        | read/write
        v
In-memory array (todos[])
```

## API

| Method | Path         | Description          | Request Body       | Response          |
|--------|--------------|----------------------|--------------------|-------------------|
| GET    | /todos       | List all todos       | —                  | 200 JSON array    |
| POST   | /todos       | Create a todo        | `{ "text": "..." }`| 201 JSON todo     |
| DELETE | /todos/:id   | Delete a todo by id  | —                  | 204 No Content    |

## Data Model

```json
{
  "id": 1,
  "text": "Buy groceries"
}
```

- `id` — auto-incrementing integer, assigned by the server
- `text` — non-empty string, trimmed before storage

## Frontend

- Single `index.html` file, no build step
- Fetches the full todo list after every add/delete to keep UI in sync
- HTML-escapes todo text before rendering to prevent XSS
