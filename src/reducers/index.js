import { combineReducers } from 'redux';
import FetchPosts from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: FetchPosts,
  form: formReducer
});

export default rootReducer;
