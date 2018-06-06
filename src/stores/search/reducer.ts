import { getType } from 'typesafe-actions';
import { SearchResult } from '../../models/Search';
import { SearchAction, searchActions } from './actions';

export interface State {
  error: string;
  loading: boolean;
  result: SearchResult;
}

const initialState: State = {
  error: null,
  loading: false,
  result: null
};

export function reducer(state: State = initialState, action: SearchAction): State {
  switch (action.type) {
    case getType(searchActions.search):
      return {
        ...initialState,
        loading: true
      };
    case getType(searchActions.success):
      return {
        ...initialState,
        result: action.payload
      };

    case getType(searchActions.fail):
      return {
        ...initialState,
        error: action.payload
      };

    default:
      return state;
  }
}

export const getResult = (state: State) => state.result;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getItems = (state: State) => state.result && state.result.Search;
