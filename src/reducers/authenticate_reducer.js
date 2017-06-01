import { AUTHENTICATE_USER } from '../actions/types';

export default function authenticate(state = false, action) {
  switch(action.type) {
    case AUTHENTICATE_USER:
      state = action.payload;
  }
  return state;
}