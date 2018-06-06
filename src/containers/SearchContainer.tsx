import * as React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { SearchInput, SearchResult } from '../models/Search';
import { getSearchLoading, getSearchResult, RootState } from '../stores';
import { searchActions } from '../stores/search/actions';

interface DispatchProps {
  search: (input: SearchInput) => void;
}

interface PropsState {
  result: SearchResult;
  loading: boolean;
}

const SearchContainer = ({ loading, result, search }: DispatchProps & PropsState) => {
  return <SearchForm onSubmit={search} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    loading: getSearchLoading(state),
    result: getSearchResult(state)
  };
};

export default connect(
  mapStateToProps,
  {
    search: searchActions.search
  }
)(SearchContainer);
