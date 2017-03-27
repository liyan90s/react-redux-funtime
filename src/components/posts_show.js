import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }

  __deletePost() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        browserHistory.push('/');
      });
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">
          Back to Index
        </Link>
        <button className="pull-xs-right" onClick={this.__deletePost.bind(this)}>
          Delete Post
        </button>
        <h3>{this.props.post.title}</h3>
        <h6>{this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);