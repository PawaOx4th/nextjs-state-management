import { ITodo } from './ITodo';
import { makeAutoObservable, observable, action, computed } from 'mobx';

export class TodoStore {
  @observable listTodo: ITodo[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  @action
  setListTodo(data: ITodo[]) {
    this.listTodo = [...data];
  }

  @computed
  get getTodoList() {
    const _listTodo = [...this.listTodo];
    const result = _listTodo.slice(0, 20);
    return result;
  }

  @action
  onDeleteThisItem(todoId: ITodo['id']) {
    this.listTodo = this.listTodo.filter((todo) => todo.id !== todoId);
  }

  get todoCount() {
    return this.listTodo.length;
  }
}

const todoStore = new TodoStore();
export default todoStore;
