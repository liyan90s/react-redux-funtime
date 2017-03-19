export function selectBook(book) {
  // selectBook is an action creator, which will return an action, 
  // aka, an object with type property
  return {
    type: 'SELECT_BOOK',
    payload: book
  };
}