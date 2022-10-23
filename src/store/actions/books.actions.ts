import * as t from './actions.types';

export const setNewBooksAC = (payload: any) => {
  return { type: t.SET_NEW_BOOKS, payload };
};
