import { combineReducers } from 'redux';
import Authenticate from './authenticate_reducer';

const rootReducer = combineReducers({
  authenticated: Authenticate
});

export default rootReducer;
