import type { BooksActions } from '../actions';
import type { Book, BookFull } from '../../types';

type BooksState = {
  loading: boolean,
  newBooks: Book[],
  fullBook: BookFull | null,
};

const initialState: BooksState = {
  loading: false,
  newBooks: [],
  fullBook: null,
};

export const booksReducer = (state = initialState, action: BooksActions): BooksState => {
  switch (action.type) {
    case 'books/SET_NEW_BOOKS': {
      return { ...state, newBooks: action.payload };
    }
    case 'books/SET_FULL_BOOK': {
      return { ...state, fullBook: action.payload };
    }

    case 'books/SET_BOOKS_LOADING': {
      return { ...state, loading: action.payload };
    }

    default:
      return state;
  }
};
