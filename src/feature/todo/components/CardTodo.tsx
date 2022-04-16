import React, { memo } from 'react';
import { ITodo } from '../../../interfaces/ITodo';

type Props = {
  todo: ITodo;
  deleteThisTodo: (id: number) => void;
  updateThisTodo: (index: number, todo: ITodo) => void;
};

function CardTodo({ todo, deleteThisTodo, updateThisTodo }: Props) {
  return (
    <li
      key={todo.id}
      className="my-2 flex justify-between border p-2 font-roboto transition-all hover:shadow-md"
    >
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          checked={todo.completed}
          onChange={() => updateThisTodo(todo.id, todo)}
        />{' '}
        <strong>{todo.id}</strong>. {todo.title}
      </div>
      <button
        className="text-md rounded border border-white bg-green-500 px-2 text-white"
        onClick={() => deleteThisTodo(todo.id)}
      >
        &#xd7;
      </button>
    </li>
  );
}

export default memo(CardTodo);
