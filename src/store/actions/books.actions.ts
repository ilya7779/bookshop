import * as t from './actions.types';
import {Dispatch} from "redux";
import {Book} from "../../types";
import {AppThunk} from "../store";

export const setNewBooksAC = (payload: Array<Book>) => {
  return {type: t.SET_NEW_BOOKS, payload};
};
export const setCurrentBookAC = (payload: Book) => {
  return {type: t.SET_CURRENT_BOOK, payload};
};

export const getBooksTC = (): AppThunk => {
  return (dispatch) => {
    fetch('https://api.itbook.store/1.0/new').then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(setNewBooksAC(json.books))
    }).catch((error: any) => {
      console.log(error)
    });
  }
}
export const getCurrentBookTC = (isbn13: string) => {
  return (dispatch: Dispatch) => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(setCurrentBookAC(json))
    }).catch((error: any) => {
      console.log(error)
    });
  }
}