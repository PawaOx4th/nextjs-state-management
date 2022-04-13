import { atom } from 'jotai';
import { IUser } from './IUser';

export const UserStore = atom<{
  users: IUser[];
}>({
  users: []
});
