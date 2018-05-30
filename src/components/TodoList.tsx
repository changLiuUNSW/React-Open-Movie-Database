import * as React from 'react';
import { Todo } from '../models/Todo';

interface TodoListProps {
  items: Todo[];
}

const TodoList = ({ items }: TodoListProps) => {
  return <ul>{items.map(item => <li key={item.id}>{item.item}</li>)}</ul>;
};

export default TodoList;
