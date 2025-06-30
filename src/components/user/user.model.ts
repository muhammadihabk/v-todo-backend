import mongoose from 'mongoose';
import { IDBUser } from './user.types';

const collection = 'user';
const schema = new mongoose.Schema<IDBUser>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    salt: { type: String, required: true },
    hash: { type: String, required: true },
  },
  {
    timestamps: true,
    collection,
  }
);

const userModel = mongoose.model(collection, schema);

export default userModel;
