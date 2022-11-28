import type { Book, BookFull } from '../../types';

// Requests
// export type GetBooksRequest = {};
export type GetBookRequest = string;

// Results
export type GetBooksResult = { books: Book[], error: string, total: string, };
export type GetBookResult = BookFull;
