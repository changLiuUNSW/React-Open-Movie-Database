import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Movie, Result, SearchInput } from './../models/Search';

export interface Requests {
  search(input: SearchInput): Observable<Result>;
  detail(id: string): Observable<Movie>;
}

export const requests: Requests = {
  search(input: SearchInput): Observable<Result> {
    return ajax.getJSON<Result>(
      `https://www.omdbapi.com/?s=${input.title}&y=${input.year}&page=${input.page}&apikey=74bce0cd`
    );
  },
  detail(id: string): Observable<Movie> {
    return ajax.getJSON<Movie>(
      `https://www.omdbapi.com/?i=${id}&plot=full&r=json&apikey=74bce0cd`
    );
  }
};
