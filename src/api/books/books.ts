import { api } from '../api';
import type { GetBookRequest, GetBookResult, GetBooksResult } from './types';

export const getBooks = () => {
  return api.get<GetBooksResult>('/new', { params: {} });
};

export const getBook = (isbn13: GetBookRequest) => {
  return api.get<GetBookResult>(`/books/${isbn13}`);
};
