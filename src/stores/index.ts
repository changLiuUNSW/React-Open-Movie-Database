import createHistory from 'history/createBrowserHistory';
import { RouterAction } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createSelector } from 'reselect';
import { requests, Requests } from '../services/Api';
import { SearchAction } from './search/actions';
import { epics as searchEipcs } from './search/epics';
import * as fromSearch from './search/reducer';

export type RootAction = SearchAction | RouterAction;

export interface RootState {
  search: fromSearch.State;
}

export interface Dependencies {
  requests: Requests;
}

export const history = createHistory();

const rootEpic = combineEpics(...searchEipcs);

const rootReducer = combineReducers<RootState>({
  search: fromSearch.reducer
});

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const dependencies: Dependencies = {
  requests
};

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [createEpicMiddleware(rootEpic, { dependencies })];

  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();

/**
 * Data selector
 */
export const getSearchState = (state: RootState) => state.search;
export const getSearchResult = createSelector(getSearchState, fromSearch.getResult);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);
export const getSearchError = createSelector(getSearchState, fromSearch.getError);
export const getSearchItems = createSelector(getSearchState, fromSearch.getItems);
export const getSearchTotal = createSelector(getSearchState, fromSearch.getTotal);
export const getSearchInput = createSelector(getSearchState, fromSearch.getSearchInput);
