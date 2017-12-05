import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import subscriberListApp from './reducers/';

const initialUserState = {
  usernameInit: '',
  qualitiesInit: '',
};

const reducers = combineReducers({
  subscriberListApp,
  deep: combineForms({  // https://davidkpiano.github.io/react-redux-form/docs/api/combineForms.html
    user: initialUserState,
  }, 'deep'),
});

export default createStore(
  reducers, 
  applyMiddleware(thunk)
);