import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import styled from 'styled-components';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import { Item, Result, SearchInput } from '../models/Search';
import {
  getSearchItems,
  getSearchLoading,
  getSearchResult,
  getSearchTotal,
  RootAction,
  RootState
} from '../stores';
import { getSearchInput } from '../stores';
import { searchActions } from '../stores/search/actions';

interface PropsState {
  inputs: SearchInput;
  items: Item[];
  result: Result;
  loading: boolean;
  total: number;
  search: (input: SearchInput) => void;
  reset: () => void;
}

const Container = styled.div`
  padding: 1rem 1rem;
`;

const SearchContainer = ({ search, items, inputs, total, reset }: PropsState) => {
  return (
    <Container>
      <SearchForm onSubmit={search} inputs={inputs} onReset={reset} />
      {items && <SearchResult items={items} inputs={inputs} total={total} />}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    items: getSearchItems(state),
    loading: getSearchLoading(state),
    result: getSearchResult(state),
    total: getSearchTotal(state),
    inputs: getSearchInput(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    search: (input: SearchInput) => {
      dispatch(searchActions.search(input));
    },
    reset: () => {
      dispatch(searchActions.reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
