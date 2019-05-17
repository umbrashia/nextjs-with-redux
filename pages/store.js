import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../component/reducers'

const midd=applyMiddleware(thunk,logger);

// export const initStore = (initialState = {}) => {
//     console.log(initialState);
//     return createStore(reducers, initialState, midd);
// };

export default createStore(reducers,midd);