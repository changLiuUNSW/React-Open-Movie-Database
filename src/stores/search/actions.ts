import { ActionType, createAction } from 'typesafe-actions';
import { SearchInput, SearchResult } from './../../models/Search';

export enum SearchActionTypes {
  Search = '[Search] Search',
  Success = '[Search] Success',
  Fail = '[Search] Fail'
}

export const searchActions = {
  fail: createAction(SearchActionTypes.Fail, resolve => {
    return (error: string) => resolve(error);
  }),
  search: createAction(SearchActionTypes.Search, resolve => {
    return (searchInput: SearchInput) => resolve(searchInput);
  }),
  success: createAction(SearchActionTypes.Success, resolve => {
    return (searchResult: SearchResult) => resolve(searchResult);
  })
};

export type SearchAction = ActionType<typeof searchActions>;
