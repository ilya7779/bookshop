import type { Book } from '../../types';

export const setNewBooksAC = (payload: Book[]) => {
  return { type: 'books/SET_NEW_BOOKS', payload } as const;
};

//region Types
type SetNewBooksAction = ReturnType<typeof setNewBooksAC>;

export type BooksActions = SetNewBooksAction;
//endregion

