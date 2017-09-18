import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
export const history = createHistory();

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState) {
	const middlewares = [
		middleware,
		thunk,
		process.env.NODE_ENV !== 'production' && logger,
	].filter(Boolean);

	const enhancers = composeEnhancers(applyMiddleware(...middlewares));

	const store = createStore(
		rootReducer,
		initialState,
		enhancers
	);

	if(module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers').default)
		);
	}

	return store;
}
