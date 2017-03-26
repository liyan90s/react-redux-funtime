import React from 'react';

import { createPost } from '../actions/index';

class PostsNew extends React.Component {
  render() {
    return (
      <div>
        <h3>Create a New Post</h3>
        <form>
          <div className="form-group" >
            <label for="title">Title</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label for="categories">Categories</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <textarea className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostsNew;