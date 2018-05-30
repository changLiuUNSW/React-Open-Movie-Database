import { ActionType, createAction } from 'typesafe-actions';
import { Todo } from './../../models/Todo';

export enum TodoActionTypes {
  Load = '[Todo] Load Todo Item',
  LoadSuccess = '[Todo] Load Success',
  LoadFail = '[Todo] Load Fail'
}

export const todoActions = {
  load: createAction(TodoActionTypes.Load),
  loadFail: createAction(TodoActionTypes.LoadFail),
  loadSuccess: createAction(TodoActionTypes.LoadSuccess, resolve => {
    return (todos: Todo[]) => resolve(todos);
  })
};

export type TodoAction = ActionType<typeof todoActions>;
