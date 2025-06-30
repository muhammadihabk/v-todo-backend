import { Router } from 'express';
import todoService from './todo.service';

const todoController = Router();

todoController.post('/', async (req: any, res) => {
  try {
    const todo = {
      ...req.body,
      userId: req.user!._id,
    };
    const createdTodo = await todoService.create(todo);

    res.status(201).json(createdTodo);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default todoController;
