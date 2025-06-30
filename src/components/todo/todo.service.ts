import todoRepository from './todo.repository';
import { ICreateTodo, IDeleteTodo, IUpdateTodo } from './todo.types';

async function create(todo: ICreateTodo) {
  try {
    return await todoRepository.create(todo);
  } catch (error) {
    throw error;
  }
}

async function findAllByUserId(options: any) {
  return await todoRepository.findAllByUserId(options);
}

async function countByUserId(userId: string) {
  return await todoRepository.countByUserId(userId);
}

async function updateTodoById(options: IUpdateTodo) {
  return await todoRepository.updateTodoById(options);
}

async function deleteTodoById(options: IDeleteTodo) {
  return await todoRepository.deleteTodoById(options);
}

export default {
  create,
  findAllByUserId,
  countByUserId,
  updateTodoById,
  deleteTodoById,
};
