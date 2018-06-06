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

export interface SearchResult {
  Search: Item[];
  totalResults: string;
  Response: string;
  Error: string;
}
