import { combineReducers } from 'redux';
import FetchPosts from './reducer_posts';

const rootReducer = combineReducers({
  posts: FetchPosts
});

export default rootReducer;
