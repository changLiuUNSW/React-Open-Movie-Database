import * as React from 'react';
import { Todo } from '../../models/Todo';

export interface TodoListProps {
  items: Todo[];
};

export const TodoList = ({ items }: TodoListProps) => {
  return (
    <ul className="todo-list">
      {items.map(item =>
        <li key={item.id}>
          {item.item}
        </li>
      )}
    </ul>
  );
};
