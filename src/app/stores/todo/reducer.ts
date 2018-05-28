import { getType } from 'typesafe-actions';
import { Todo } from '../../models/Todo';
import { TodoAction, todoActions } from './actions';

export interface State {
  failed: boolean;
  loading: boolean;
  todos: Todo[];
}

const initialState: State = {
  failed: false,
  loading: false,
  todos: []
};

export function reducer(state: State = initialState, action: TodoAction): State {
  switch (action.type) {
    case getType(todoActions.load):
      return {
        ...initialState,
        loading: true
      };
    case getType(todoActions.loadSuccess):
      return {
        ...initialState,
        todos: action.payload
      };

    case getType(todoActions.loadFail):
      return {
        ...initialState,
        failed: true
      };

    default:
      return state;
  }
}

export const getTodos = (state: State) => state.todos;
export const getLoading = (state: State) => state.loading;
