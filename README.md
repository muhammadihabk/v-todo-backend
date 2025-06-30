# Requirements

- Auth
  - sign up and sign in.
- Todos: User can
  - Create a todo.
  - View todos.
  - Update description.
  - Mark as completed.
  - Delete a todo.

# Database Design

**User**

```json
{
  name: string,
  email: string,
  salt: string,
  hash: string
}
```

**Todo**

```json
{
  title: string,
  description: string,
  completed: boolean,
  userId: reference,
  createdAt: string,
  updatedAt: string
}
```

# API Design

## Auth

| Action  | Route             |
| ------- | ----------------- |
| Sign up | POST /auth/signup |
| Sign in | POST /auth/signin |
| Logout  | POST /auth/logout |

## User

| Action         | Route     |
| -------------- | --------- |
| Get user by id | /user/:id |

## Todo

| Action             | Route            |
| ------------------ | ---------------- |
| Add new todo       | POST /todo       |
| Get all user todos | POST /todo/find  |
| Update todo        | PATCH /todo/:id |
| Delete todo by id  | DELETE /todo/:id |
