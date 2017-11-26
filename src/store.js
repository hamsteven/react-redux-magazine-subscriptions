import { combineReducers, createStore } from 'redux';
import subscriberListApp from './reducers/';
import magazines from './reducers/magazines-reducer';

const reducers = combineReducers({
  subscriberListApp,
  magazines,
});

export default createStore(reducers);
 