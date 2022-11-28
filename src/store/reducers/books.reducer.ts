import type { BooksActions } from '../actions';
import type { Book } from '../../types';

type BooksState = {
  newBooks: Book[],
};

const initialState: BooksState = {
  newBooks: [],
};

export const booksReducer = (state = initialState, action: BooksActions): BooksState => {
  switch (action.type) {
    case 'books/SET_NEW_BOOKS': {
      return { ...state, newBooks: action.payload };
    }

    default:
      return state;
  }
};
