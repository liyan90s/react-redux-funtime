import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
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

export default connect(mapStateToProps, {fetchPost: fetchPost})(PostsShow);