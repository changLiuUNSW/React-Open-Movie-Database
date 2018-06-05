import * as React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
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

const TodoContainer = ({ loading, load, items }: DispatchProps & PropsState) => {
  return <Search />;
};

const mapStateToProps = (state: RootState) => {
  return {
    items: getTodos(state),
    loading: getTodoLoading(state)
  };
};

export default connect<PropsState, DispatchProps>(
  mapStateToProps,
  {
    load: todoActions.load
  }
)(TodoContainer);
