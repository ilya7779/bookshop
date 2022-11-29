import type { BooksActions } from '../actions';
import type { Book, BookFull } from '../../types';
import type { SearchBooksResult } from '../../api/books';

type BooksState = {
  loading: boolean,
  newBooks: Book[],
  fullBook: BookFull | null,
  searchResult: SearchBooksResult | null,
  searchTerm: string,
};

const initialState: BooksState = {
  loading: false,
  newBooks: [],
  fullBook: null,
  searchResult: null,
  searchTerm: '',
};

export const booksReducer = (state = initialState, action: BooksActions): BooksState => {
  switch (action.type) {
    case 'books/SET_NEW_BOOKS': {
      return { ...state, newBooks: action.payload };
    }
    case 'books/SET_FULL_BOOK': {
      return { ...state, fullBook: action.payload };
    }
    case 'books/SET_SEARCH_RESULT': {
      return { ...state, searchResult: action.payload };
    }
    case 'books/SET_SEARCH_TERM': {
      return { ...state, searchTerm: action.payload };
    }

    case 'books/SET_BOOKS_LOADING': {
      return { ...state, loading: action.payload };
    }

    default:
      return state;
  }
};
