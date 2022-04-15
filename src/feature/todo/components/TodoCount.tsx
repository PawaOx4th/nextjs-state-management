import { observer } from 'mobx-react-lite';
import React from 'react';
import todoStore from '../TodoStore';

function TodoCount() {
  return <div>TodoCount : {todoStore.todoCount}</div>;
}

export default observer(TodoCount);
