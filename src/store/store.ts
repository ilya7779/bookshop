import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';

import { booksReducer } from './reducers';

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
