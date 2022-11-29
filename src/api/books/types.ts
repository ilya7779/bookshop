import type { Book, BookFull } from '../../types';

// Requests
// export type GetBooksRequest = {};
export type GetBookRequest = string;
export type SearchBooksRequest = { searchTerm: string, page: number };

// Results
export type GetBooksResult = { books: Book[], error: string, total: string, };
export type GetBookResult = BookFull;
export type SearchBooksResult = { books: Book[], page: string, total: string, };
