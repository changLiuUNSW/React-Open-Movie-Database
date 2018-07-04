import { getType } from 'typesafe-actions';
import { Result, SearchInput } from '../../models/Search';
import { SearchAction, searchActions } from './actions';

export interface State {
  searchInput: SearchInput;
  error: string;
  loading: boolean;
  result: Result;
}

const initialState: State = {
  searchInput: {
    page: 1,
    title: null,
    year: null
  },
  error: null,
  loading: false,
  result: null
};

export function reducer(state: State = initialState, action: SearchAction): State {
  switch (action.type) {
    case getType(searchActions.search):
      return { ...initialState, searchInput: action.payload, loading: true };
    case getType(searchActions.success):
      return { ...state, loading: false, result: action.payload };

    case getType(searchActions.fail):
      return { ...state, result: null, loading: false, error: action.payload };
    case getType(searchActions.reset):
      return initialState;
    default:
      return state;
  }
}

export const getResult = (state: State) => state.result;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getItems = (state: State) => state.result && state.result.Search;
export const getTotal = (state: State) => state.result && state.result.totalResults;
export const getSearchInput = (state: State) => state.searchInput;
