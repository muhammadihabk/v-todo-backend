import todoRepository from './todo.repository';
import { ICreateTodo } from './todo.types';

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

export default {
  create,
  findAllByUserId,
  countByUserId,
};
