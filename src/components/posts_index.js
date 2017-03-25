import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Hey Index
        <div className="text-xs-right" >
          <Link to="posts/new" className="btn btn-primary" >Add a Post</Link>
        </div>
      </div>
    );
  }
}

export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);