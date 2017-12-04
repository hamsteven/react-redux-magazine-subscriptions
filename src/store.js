import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import subscriberListApp from './reducers/';
// import magazines from './reducers/magazines-reducer';

const reducers = combineReducers({
  subscriberListApp,
  // magazines,
});

export default createStore(
  reducers, 
  applyMiddleware(thunk)
);

const initialUserState = {
  firstName: '',
  lastName: '',
};

// export default createStore(
//   reducers, 
//   combineForms({
//     user: initialUserState,
//   }),
//   applyMiddleware(thunk)
// );
 
// export default createStore(
//   combineForms({
//     user: initialUserState,
//   }),
//   applyMiddleware(thunk)
// );
 
// const store = createStore(combineForms({
//   user: initialUserState,
// }), applyMiddleware(thunk));