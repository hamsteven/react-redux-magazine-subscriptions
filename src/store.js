import { combineReducers, createStore } from 'redux';
import subscriberListApp from './reducers/reducers';

const reducers = combineReducers({
  subscriberListApp,
});

export default createStore(reducers);
 