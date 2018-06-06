import * as React from 'react';
import { Item } from '../models/Search';

interface TodoListProps {
  items: Item[];
}

const TodoList = ({ items }: TodoListProps) => {
  return <ul>{items.map(item => <li key={item.imdbID}>{item.Title}</li>)}</ul>;
};

export default TodoList;
