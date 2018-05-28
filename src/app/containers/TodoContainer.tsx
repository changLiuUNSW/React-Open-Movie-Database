import * as React from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { Todo } from '../models/Todo';
import { getTodoLoading, getTodos, RootState } from '../stores';
import { todoActions } from '../stores/todo/actions';

interface DispatchProps {
  load: () => void;
}

type PropsState = {
  items: Todo[];
  loading: boolean;
}

type Props = DispatchProps & PropsState;

class TodoContainer extends React.PureComponent<Props> {
  render() {
    const { loading, load, items } = this.props;
    return (
      <div className="todo">
        <button onClick={load}>load item</button>
        {loading && <p>loading...</p>}
        {!loading && <TodoList items={items} />}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    items: getTodos(state),
    loading: getTodoLoading(state)
  };
}

export default connect(mapStateToProps, {
  load: todoActions.load
})(TodoContainer);
