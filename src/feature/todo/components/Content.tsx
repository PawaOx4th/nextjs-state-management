import { observer } from 'mobx-react-lite';
import React from 'react';
import todoStore from '../TodoStore';

function Content() {
  return (
    <div className="mt-2 h-96 w-8/12 overflow-scroll scroll-smooth bg-gray-200 py-5 font-roboto text-sm">
      <ul className="mt-5 flex   flex-col gap-3   px-4">
        {todoStore.getTodoList.map((todo) => (
          <li
            key={todo.id}
            className="w-full border-b border-b-gray-700"
          >
            <button
              className="text-md p mr-2  bg-blue-600 px-2 py-1 text-white"
              onClick={() => todoStore.onDeleteThisItem(todo.id)}
            >
              &#xd7;
            </button>
            <strong>{todo.id}.</strong> {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default observer(Content);
