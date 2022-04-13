import { useAtom } from 'jotai';
import { memo } from 'react';
import { ITodo } from '../stores/todo/ITodo';
import { TodoStore } from '../stores/todo/TodoStore';

const Card = ({ content }: { content: ITodo }) => {
  const [todoStore, setTodoStore] = useAtom(TodoStore);

  const handleDeleteThisTodo = (todoId: ITodo['id']) => {
    const _todos = [...todoStore.listTodo];
    const result = _todos.filter((todo) => todo.id !== todoId);
    setTodoStore({ ...todoStore, listTodo: result });
  };

  return (
    <div className="flex w-full items-center gap-2">
      <input
        type="checkbox"
        name="check"
        checked={content.completed}
        onChange={() => {
          const _todos = todoStore.listTodo.map((todo) =>
            todo.id === content.id
              ? { ...todo, completed: !todo.completed }
              : todo
          );

          setTodoStore({ ...todoStore, listTodo: _todos });
        }}
      />
      <code className="mb-2 block flex-1 rounded bg-gray-200 px-2 py-4 font-roboto text-sm text-emerald-600">
        {JSON.stringify(content)}
      </code>
      <div className="p-6">
        <button
          className="cursor-pointer rounded 
        bg-blue-400 py-2 px-3 font-medium text-white transition-all hover:bg-blue-500 hover:shadow-md"
          onClick={() => handleDeleteThisTodo(content.id)}
        >
          &#215;
        </button>
      </div>
    </div>
  );
};

export default memo(Card);
