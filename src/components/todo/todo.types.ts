import { Types } from "mongoose";

export interface IDBTodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateTodo {
  title: string;
  description: string;
}
