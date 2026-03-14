# Requirements

## Functional Requirements

1. Users can add a new todo item by typing text and pressing Add or Enter.
2. Users can view a list of all existing todo items.
3. Users can delete any todo item from the list.
4. An empty state message is shown when there are no todos.

## Non-Functional Requirements

- The backend must respond to API requests within a reasonable time (local dev).
- Todo text must be trimmed and non-empty before saving.
- The frontend must sanitize rendered todo text to prevent XSS.

## Out of Scope

- Persistence (todos are in-memory only)
- User authentication
- Todo editing / completion toggling
