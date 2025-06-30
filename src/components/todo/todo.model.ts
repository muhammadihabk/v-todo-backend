import mongoose, { Schema } from 'mongoose';
import { IDBTodo } from './todo.types';
import { userCollectionName } from '../user/user.model';

const collection = 'todo';
const schema = new mongoose.Schema<IDBTodo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: {
      type: Schema.Types.ObjectId,
      ref: userCollectionName,
      required: true,
    },
  },
  {
    timestamps: true,
    collection,
  }
);

const todoModel = mongoose.model(collection, schema);

export default todoModel;
