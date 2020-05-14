import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const enhancers = compose(
	applyMiddleware(thunkMiddleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, {}, enhancers);

export default store;
