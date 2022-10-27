import * as t from './../actions';

const initialState = {
  newBooks: [],
  currentBook: null,
};

export const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case t.SET_NEW_BOOKS: {
      return { ...state, newBooks: action.payload };
    }
    case t.SET_CURRENT_BOOK: {
      return { ...state, currentBook: action.payload };
    }
    default:
      return state;
  }
};
