import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createSelector } from 'reselect';
import { requests, Requests } from '../services/Api';
import { SearchAction } from './search/actions';
import { epics as searchEipcs } from './search/epics';
import * as fromSearch from './search/reducer';

export type RootAction = SearchAction;

export interface RootState {
  search: fromSearch.State;
}

export interface Dependencies {
  requests: Requests;
}

export const history = createBrowserHistory();

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
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Dependencies>({
    dependencies
  });

  // configure middlewares
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const storeInsrance = createStore(connectRouter(history)(rootReducer), initialState!, enhancer);

  epicMiddleware.run(rootEpic);
  return storeInsrance;
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
