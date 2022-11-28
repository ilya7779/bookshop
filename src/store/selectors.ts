import type { RootState } from './store';

export const newBooksSelector = (state: RootState) => state.books.newBooks;
export const fullBookSelector = (state: RootState) => state.books.fullBook;
