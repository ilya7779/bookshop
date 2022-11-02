import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools, devToolsEnhancer} from '@redux-devtools/extension';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {booksReducer} from './reducers';
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
  books: booksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // devToolsEnhancer(),
));

export const useAppDispatch = useDispatch<AppDispatch>;

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
