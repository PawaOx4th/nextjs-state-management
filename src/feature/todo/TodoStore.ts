import { ITodo } from './../../interfaces/ITodo';
import { BehaviorSubject, distinctUntilChanged, filter, map } from 'rxjs';

export const todos$ = new BehaviorSubject<ITodo[]>([]);

export const countTodoComplate$ = todos$.pipe(
  map((todos) => todos.filter((todo) => todo.completed).length),
  distinctUntilChanged()
);
