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

export default {
  create,
};
