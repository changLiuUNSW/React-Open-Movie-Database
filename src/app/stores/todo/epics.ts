import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { delay, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState } from '..';
import { todoActions } from './actions';

const loadTodos: Epic<RootAction, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(todoActions.load)),
    delay(2000),
    switchMap(action => {
      const mockTodo = [{ id: 1, item: 'item1' }];
      return of(todoActions.loadSuccess(mockTodo));
    })
  );

export const epics = [loadTodos];
