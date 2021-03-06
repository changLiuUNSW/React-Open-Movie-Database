import { ActionType, createAction } from 'typesafe-actions';
import { Result, SearchInput } from './../../models/Search';

export enum SearchActionTypes {
  Search = '[Search] Search',
  Success = '[Search] Success',
  Fail = '[Search] Fail',
  Reset = '[Search] Reset'
}

export const searchActions = {
  fail: createAction(SearchActionTypes.Fail, resolve => {
    return (error: string) => resolve(error);
  }),
  search: createAction(SearchActionTypes.Search, resolve => {
    return (searchInput: SearchInput) => resolve(searchInput);
  }),
  success: createAction(SearchActionTypes.Success, resolve => {
    return (result: Result) => resolve(result);
  }),
  reset: createAction(SearchActionTypes.Reset)
};

export type SearchAction = ActionType<typeof searchActions>;
