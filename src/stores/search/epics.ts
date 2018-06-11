import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { Dependencies, RootAction, RootState } from '..';
import { searchActions } from './actions';

const search: Epic<RootAction, RootState, Dependencies> = (action$, store, { requests }) =>
  action$.pipe(
    filter(isActionOf(searchActions.search)),
    switchMap(action => {
      return requests.search(action.payload).pipe(
        map(data => {
          if (data.Response === 'False') {
            return searchActions.fail(data.Error);
          }
          return searchActions.success(data);
        }),
        catchError(() => of(searchActions.fail('Server down')))
      );
    })
  );

export const epics = [search];
