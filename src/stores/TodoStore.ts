import { ITodo } from './ITodo';
import { atom } from 'jotai';

export interface ITodoStore {
  listTodo: ITodo[];
}

export const TodoStore = atom<ITodoStore>({
  listTodo: []
});
