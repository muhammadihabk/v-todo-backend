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

todoController.post('/find', async (req: any, res) => {
  try {
    const limit = parseInt(req.body?.limit) || 25;
    const page = parseInt(req.body?.page) || 1;
    const skip = (page - 1) * limit;
    const userId = req.user!._id;
    const options = {
      userId,
      limit,
      skip,
    };

    const [todos, count] = await Promise.all([
      todoService.findAllByUserId(options),
      todoService.countByUserId(userId),
    ]);

    res.json({
      todos,
      paginate: {
        limit,
        count,
        page,
      },
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

todoController.patch('/', async (req: any, res) => {
  try {
    const options = {
      ...req.body,
      userId: req.user!._id,
    };
    const updated = await todoService.updateTodoById(options);

    if (!updated) {
      res.sendStatus(404);
      return;
    }

    res.json(updated);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

todoController.delete('/:id', async (req: any, res) => {
  try {
    const options = {
      _id: req.params.id,
      userId: req.user!._id,
    };
    const deleted = await todoService.deleteTodoById(options);

    if (!deleted) {
      res.sendStatus(404);
      return;
    }

    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default todoController;
