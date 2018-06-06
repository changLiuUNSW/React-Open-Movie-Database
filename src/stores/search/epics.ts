import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState } from '..';
import { SearchResult } from './../../models/Search';
import { searchActions } from './actions';

const search: Epic<RootAction, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(searchActions.search)),
    switchMap(action => {
      return ajax
        .getJSON<SearchResult>(
          `http://www.omdbapi.com/?s=${action.payload.title}&y=${action.payload.year}&page=${
            action.payload.page
          }&apikey=74bce0cd`
        )
        .pipe(
          map(data => {
            if (data.Response === 'False') {
              return searchActions.fail(data.Error);
            }
            return searchActions.success(data);
          }),
          catchError(err => of(searchActions.fail('Server down')))
        );
    })
  );

export const epics = [search];
