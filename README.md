# Requirements

- Auth
  - sign up and sign in.
- Todos: User can
  - Create a todo.
  - View todos.
  - Delete.
  - Update description.
  - Mark as completed.

# Database Design

**User**

```json
{
  name: string,
  email: string,
  password: string,
  todos: todoReference[]
}
```

**Todo**

```json
{
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string
}
```
