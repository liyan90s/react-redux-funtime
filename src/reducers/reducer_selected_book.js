// state argument is a portion of the application state that 
// this reducer is responsible for
export default function selectedBook(state = null, action) {
  switch(action.type) {
    case 'SELECT_BOOK':
      return action.payload;
  }

  return state;
}