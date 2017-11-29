import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import subscriberListApp from './reducers/';
import magazines from './reducers/magazines-reducer';

const reducers = combineReducers({
  subscriberListApp,
  magazines,
});

export default createStore(
  reducers, 
  applyMiddleware(thunk)
);
 