import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import message from './reducers/message';
import loading from './reducers/loading';

const rootReducer = combineReducers({
  user,
  message,
  loading,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
