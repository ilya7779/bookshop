import { applyMiddleware, combineReducers, createStore } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';

import { booksReducer } from './reducers';
import type { BooksActions } from './actions';

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  traceLimit: 20,
  trace: true,
});

let middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares]; // здесь можно добавить мидлвары, необходимые только development
}

const rootReducer = combineReducers({
  books: booksReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

//region Types
export type AppActions = BooksActions;
export type AppThunk = ThunkAction<void, RootState, unknown, AppActions>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;
//endregion

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
