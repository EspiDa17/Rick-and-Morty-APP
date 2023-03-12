import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducer';

//const composed = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

// Nuevo
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// Nuevo
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(...middleware))
    );

export default store;