import { api } from '../api';
import type {
  GetBookRequest,
  GetBookResult,
  GetBooksResult,
  SearchBooksRequest,
  SearchBooksResult,
} from './types';

export const getBooks = () => {
  return api.get<GetBooksResult>('/new', { params: {} });
};

export const getBook = (isbn13: GetBookRequest) => {
  return api.get<GetBookResult>(`/books/${isbn13}`);
};

export const searchBooks = (data: SearchBooksRequest) => {
  const { searchTerm, page } = data;
  return api.get<SearchBooksResult>(`/search/${searchTerm}/${page}`);
};
