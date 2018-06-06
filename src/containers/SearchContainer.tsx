import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { SearchInput, SearchResult } from '../models/Search';
import { getSearchLoading, getSearchResult, RootAction, RootState } from '../stores';
import { searchActions } from '../stores/search/actions';

interface PropsState {
  result: SearchResult;
  loading: boolean;
  search: (input: SearchInput) => void;
}

const SearchContainer = ({ loading, result, search }: PropsState) => {
  return <SearchForm onSubmit={search} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    loading: getSearchLoading(state),
    result: getSearchResult(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    search: (input: SearchInput) => {
      dispatch(searchActions.search(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
