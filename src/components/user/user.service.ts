import { generatePassword } from '../../config/auth/password';
import UserRepository from './user.repository';
import { ICreateUser, IDBUser, IFindUserFilter, IUser } from './user.types';

async function create(inUser: ICreateUser) {
  try {
    const { salt, hash } = generatePassword(inUser.password);
    const user: IDBUser = Object.assign(inUser, { salt, hash });

    return await UserRepository.create(user);
  } catch (error) {
    throw error;
  }
}

async function findOne(filter: IFindUserFilter): Promise<IUser | null> {
  const result = await UserRepository.findOne(filter);
  if (!result) {
    return null;
  }
  const { salt, hash, _id, ...user } = result;

  return { ...user, _id: _id.toString() };
}

async function authFindOne(filter: IFindUserFilter): Promise<IDBUser | null> {
  return await UserRepository.findOne(filter);
}

export default {
  create,
  findOne,
  authFindOne,
};
