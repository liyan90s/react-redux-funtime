import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory, Link } from 'react-router';

import { createPost } from '../actions/index';

class PostsNew extends React.Component {
  __backToIndex() {
    browserHistory.push('/');
  }

  __handleOnSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.__backToIndex();
      })
  }

  __hasError(field) {
    return this.props.fields[field].touched && !!this.props.fields[field].error;
  }

  __renderError(field) {
    return this.props.fields[field].touched ? this.props.fields[field].error : '';
  }

  render() {
    return (      
      <div>
        <h3>Create a New Post</h3>
        <form onSubmit={this.props.handleSubmit(this.__handleOnSubmit.bind(this))}>
          <div className={"form-group " + (this.__hasError("title") ? "has-danger" : "")} >
            <label htmlFor="title">Title</label>
            <input className="form-control" type="text" {...this.props.fields.title}/>
            <div>{this.__renderError("title")}</div>
          </div>
          <div className={"form-group " + (this.__hasError("categories") ? "has-danger" : "")} >
            <label htmlFor="categories">Categories</label>
            <input className="form-control" type="text" {...this.props.fields.categories} />
            <div>{this.__renderError("categories")}</div>
          </div>
          <div className={"form-group " + (this.__hasError("content") ? "has-danger" : "")} >
            <label htmlFor="content">content</label>
            <textarea className="form-control" {...this.props.fields.content} />
            <div>{this.__renderError("content")}</div>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-secondary" type="button" onClick={this.__backToIndex}>Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter a category';
  }

  if (!values.content) {
    errors.content = 'Enter a content';
  }    

  return errors;
}

export default reduxForm({
  form: 'PostNewForm',   // this is the form name, shoule be a unique token
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost: createPost })(PostsNew);


// user types sth ... in the inputs, which will be recored on application state
// state === {
//   form: {
//     PostNewForm: {
//       title: '...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }