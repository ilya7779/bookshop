import * as t from './actions.types';

export const setNewBooksAC = (payload: any) => {
  return {type: t.SET_NEW_BOOKS, payload};
};
export const setCurrentBookAC = (payload: any) => {
  return {type: t.SET_CURRENT_BOOK, payload};
};

export const getBooksTC = () => {
  return (dispatch: any) => {
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
  return (dispatch: any) => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(setCurrentBookAC(json))
    }).catch((error: any) => {
      console.log(error)
    });
  }
}