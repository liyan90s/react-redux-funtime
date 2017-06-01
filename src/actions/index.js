import { AUTHENTICATE_USER } from './types';

export function authenticate(isLoggedIn) {
  return {
    type: AUTHENTICATE_USER,
    payload: isLoggedIn
  }
}