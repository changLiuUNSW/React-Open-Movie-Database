import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createSelector } from 'reselect';
import { TodoAction } from './todo/actions';
import { epics as todoEipcs } from './todo/epics';
import * as fromTodo from './todo/reducer';

export type RootAction = TodoAction;

export interface RootState {
  todo: fromTodo.State;
}

export const rootEpic = combineEpics(...todoEipcs);

export const rootReducer = combineReducers({ todo: fromTodo.reducer });

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [createEpicMiddleware(rootEpic)];

  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

/**
 * Data selector
 */
export const getTodoState = (state: RootState) => state.todo;
export const getTodos = createSelector(getTodoState, fromTodo.getTodos);
export const getTodoLoading = createSelector(getTodoState, fromTodo.getLoading);

// export store singleton instance
export default store;
