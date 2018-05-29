import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import TodoList from '../components/TodoList';
import { Todo } from '../models/Todo';
import { getTodoLoading, getTodos, RootState } from '../stores';
import { todoActions } from '../stores/todo/actions';

interface DispatchProps {
  load: () => void;
}

interface PropsState {
  items: Todo[];
  loading: boolean;
}

export const TodoContainer = ({ loading, load, items }: DispatchProps & PropsState) => {
  return (
    <div>
      <Button primary={true} onClick={load}>
        load item
      </Button>
      {loading && <p>loading...</p>}
      {!loading && <TodoList items={items} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    items: getTodos(state),
    loading: getTodoLoading(state)
  };
};

export default connect<PropsState, DispatchProps>(mapStateToProps, {
  load: todoActions.load
})(TodoContainer);
