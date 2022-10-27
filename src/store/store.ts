import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools, devToolsEnhancer} from '@redux-devtools/extension';
import thunk from 'redux-thunk'

import {booksReducer} from './reducers';

const rootReducer = combineReducers({
  books: booksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // devToolsEnhancer(),
));
