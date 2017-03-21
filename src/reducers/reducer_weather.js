import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // here, we use concat to create a new state
      // DON'T mutate the state in the reducer
      return state.concat([action.payload.data]);
  }

  return state;
}