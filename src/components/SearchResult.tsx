import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import { Item, SearchInput } from '../models/Search';
import { requests } from '../services/Api';

const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  margin: 1rem;
`;

const Poster = styled.img`
  width: 10rem;
  height: 14rem;
`;

const Loader = styled.div`
  clear: both;
`;

interface SearchResultProps {
  inputs: SearchInput;
  items: Item[];
  total: number;
}

interface State {
  inputs: SearchInput;
  items: Item[];
  hasMore: boolean;
}

class SearchResult extends React.Component<SearchResultProps, State> {
  constructor(props: SearchResultProps) {
    super(props);
    this.state = {
      inputs: props.inputs,
      items: props.items,
      hasMore: true
    };
  }

  public render() {
    const { items } = this.state;
    const loader = <Loader key={0}>Loading ...</Loader>;
    return (
      <InfiniteScroll
        pageStart={2}
        loader={loader}
        loadMore={this.loadMore}
        hasMore={this.state.hasMore}
      >
        <Container>
          <div>{`${this.props.total} titles`}</div>
          <ItemWrapper>
            {items.map(item => (
              <Item key={item.imdbID}>
                <Poster src={item.Poster} alt={item.Title} />
              </Item>
            ))}
          </ItemWrapper>
        </Container>
      </InfiniteScroll>
    );
  }

  private loadMore = (page: number) => {
    requests.search({ ...this.state.inputs, page }).subscribe(
      data => {
        if (data.Response === 'False') {
          this.setState({ hasMore: false });
        } else {
          const items = this.state.items;
          if (items && items.length) {
            this.setState({
              items: items.concat(data.Search),
              hasMore: page * 10 < data.totalResults
            });
          }
          this.setState({ hasMore: false });
        }
      },
      () => {
        this.setState({ hasMore: false });
      }
    );
  };
}

export default SearchResult;
