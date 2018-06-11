import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Result, SearchInput } from './../models/Search';

export interface Requests {
  search(input: SearchInput): Observable<Result>;
}

export const requests: Requests = {
  search(input: SearchInput): Observable<Result> {
    return ajax.getJSON<Result>(
      `https://www.omdbapi.com/?s=${input.title}&y=${input.year}&page=${input.page}&apikey=74bce0cd`
    );
  }
};
