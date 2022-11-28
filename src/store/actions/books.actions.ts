import { getBook, getBooks } from '../../api/books';
import type { Book, BookFull } from '../../types';
import type { AppThunk } from '../store';

export const setNewBooksAC = (payload: Book[]) => {
  return { type: 'books/SET_NEW_BOOKS', payload } as const;
};

export const setFullBookAC = (payload: BookFull | null) => {
  return { type: 'books/SET_FULL_BOOK', payload } as const;
};

export const setBooksLoadingAC = (payload: boolean) => {
  return { type: 'books/SET_BOOKS_LOADING', payload } as const;
};

export const getNewBooksTC = (): AppThunk => async (dispatch) => {
  dispatch(setBooksLoadingAC(true));

  try {
    const result = await getBooks();
    dispatch(setNewBooksAC(result.data.books));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setBooksLoadingAC(false));
  }

  // тоже самое только без использования async/await
  // getBooks().then((res) => {
  //   dispatch(setNewBooksAC(res.data.books));
  // }).catch((e) => {
  //   console.error(e);
  // }).finally(() => {
  //   dispatch(setBooksLoadingAC(false));
  // });
};

export const getFullBookTC = (isbn13: string): AppThunk => async (dispatch) => {
  dispatch(setBooksLoadingAC(true));

  try {
    const result = await getBook(isbn13);
    dispatch(setFullBookAC(result.data));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setBooksLoadingAC(false));
  }
};

//region Types
type SetNewBooksAction = ReturnType<typeof setNewBooksAC>;
type SetFullBookAction = ReturnType<typeof setFullBookAC>;
type SetBooksLoadingAction = ReturnType<typeof setBooksLoadingAC>;

export type BooksActions = SetNewBooksAction | SetFullBookAction | SetBooksLoadingAction;
//endregion

