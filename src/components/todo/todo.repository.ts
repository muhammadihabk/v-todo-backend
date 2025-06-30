import todoModel from './todo.model';
import { ICreateTodo, IDeleteTodo, IUpdateTodo } from './todo.types';
import { handleDBErrors } from '../../common/errors';

async function create(todo: ICreateTodo) {
  try {
    return (await todoModel.create(todo)).toObject();
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

async function updateTodoById(options: IUpdateTodo) {
  const { _id, userId } = options;
  return await todoModel.findOneAndUpdate({ _id, userId }, options, {
    new: true,
  });
}

async function deleteTodoById(options: IDeleteTodo) {
  return await todoModel.findOneAndDelete(options);
}

export default {
  create,
  findAllByUserId,
  countByUserId,
  updateTodoById,
  deleteTodoById,
};
