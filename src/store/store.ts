import { combineReducers, createStore } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from '@redux-devtools/extension';

import { booksReducer } from './reducers';

const rootReducer = combineReducers({
  books: booksReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
