import { ITodo } from './../../interfaces/ITodo';
import { BehaviorSubject } from 'rxjs';

export const todos$ = new BehaviorSubject<ITodo[]>([]);
