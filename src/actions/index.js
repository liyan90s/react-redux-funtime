import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
const CREATE_POST = 'CREATE_POST';

const ROOT_URL  = 'http://reduxblog.herokuapp.com/api';
const API_KEY   = '?key=optimus21';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(formData) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, formData);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}