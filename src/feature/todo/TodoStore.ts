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
    return this.listTodo.slice(0, 20);
  }

  @action
  onDeleteThisItem(todoId: ITodo['id']) {
    this.listTodo = this.listTodo.filter((todo) => todo.id !== todoId);
  }

  get countTodoIsComplated() {
    return this.listTodo.filter((todo) => todo.completed).length;
  }
}

const todoStore = new TodoStore();
export default todoStore;
