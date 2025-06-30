import todoRepository from "./todo.repository";
import { ICreateTodo } from "./todo.types";

async function create(todo: ICreateTodo) {
  try {
    return await todoRepository.create(todo);
  } catch (error) {
    throw error;
  }
}

export default {
  create,
};
