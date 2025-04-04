import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './redux/reducers';

const initialState = {};
const middleware = [thunk];

const composedEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;