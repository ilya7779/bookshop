import * as t from './../actions';

const initialState = {
  newBooks: [],
};

export const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case t.SET_NEW_BOOKS: {
      return { ...state, newBooks: action.payload };
    }

    default:
      return state;
  }
};
