import { combineReducers } from 'redux';
import FetchPosts from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts: FetchPosts,
  form: formReducer
});

// export default rootReducer;
