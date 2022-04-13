import { atom } from 'jotai';
import { TodoStore } from './todo/TodoStore';

export const CombineStore = atom((get) => {
  const todosCount = get(TodoStore);
  return todosCount.listTodo.length;
});
