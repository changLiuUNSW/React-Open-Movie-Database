import * as React from 'react';
import { match as RouterMatch } from 'react-router';
import styled from 'styled-components';
import { Movie } from '../models/Search';
import { requests } from '../services/Api';

interface Props {
  match: RouterMatch<any>;
}

interface State {
  movie: Movie;
  prevId: string;
  error: string;
}

const Container = styled.div`
  padding: 1rem 1rem;
`;

const Poster = styled.img`
  width: 10rem;
  height: 14rem;
`;

export default class Detail extends React.Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State): State {
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.match.params.id !== state.prevId) {
      return {
        movie: null,
        error: null,
        prevId: props.match.params.id
      };
    }

    // No state update necessary
    return null;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      movie: null,
      error: null,
      prevId: props.match.params.id
    };
  }

  componentDidMount() {
    this.loadMovieDetail();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.error) {
      return;
    }
    if (this.state.movie === null) {
      this.loadMovieDetail();
    }
  }

  public render() {
    const { error, movie } = this.state;
    return (
      <Container>
        {error && <p>{error}</p>}
        {movie && (
          <div>
            <Poster src={movie.Poster} />
            <h1>Title: {movie.Title}</h1>
            <p>ImdbRating: {movie.imdbRating}</p>
            <p>Year: {movie.Year}</p>
            <p>Rate: {movie.Rated}</p>
            <p>Award: {movie.Awards}</p>
            <p>Director: {movie.Director}</p>
            <p>Website: <a href={movie.Website}>{movie.Website}</a></p>
            <p>Plot: {movie.Plot}</p>
          </div>
        )}
      </Container>
    );
  }

  private loadMovieDetail = () => {
    requests.detail(this.state.prevId).subscribe(data => {
      if (data.Response === 'False') {
        this.setState({
          error: data.Error
        });
      } else {
        this.setState({ movie: data });
      }
    });
  };
}
