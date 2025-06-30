import todoModel from './todo.model';
import { ICreateTodo } from './todo.types';
import { handleDBErrors } from '../../common/errors';

async function create(todo: ICreateTodo) {
  try {
    return await todoModel.create(todo);
  } catch (error: any) {
    handleDBErrors(error, 'Todo');
  }
}

async function findAllByUserId(options: any) {
  const { userId, limit, skip } = options;
  return await todoModel.find({ userId }).limit(limit).skip(skip);
}

async function countByUserId(userId: string) {
  return await todoModel.countDocuments({ userId });
}

export default {
  create,
  findAllByUserId,
  countByUserId,
};
