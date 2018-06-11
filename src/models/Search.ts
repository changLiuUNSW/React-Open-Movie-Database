export interface SearchInput {
  title: string;
  year: string;
  page: number;
}

export interface Item {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Result {
  Search: Item[];
  totalResults: number;
  Response: string;
  Error: string;
}
