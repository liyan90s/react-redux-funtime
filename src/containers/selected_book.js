import React from 'react';
import { connect } from 'react-redux';

class SelectedBook extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Please select a book.</div>
    }
    return  (
      <div>Title: { this.props.book.title }</div>
    );
  }; 
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(SelectedBook);