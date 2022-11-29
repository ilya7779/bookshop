import type { RootState } from './store';

export const newBooksSelector = (state: RootState) => state.books.newBooks;
export const fullBookSelector = (state: RootState) => state.books.fullBook;
export const searchResultSelector = (state: RootState) => state.books.searchResult;
export const searchTermSelector = (state: RootState) => state.books.searchTerm;
