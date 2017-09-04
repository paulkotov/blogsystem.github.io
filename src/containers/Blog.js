import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlogPage from '../components/BlogPage';
import * as BlogActions from '../actions';

const extractBlog = arr => {
  return Object.assign({}, arr[0]);
};

const Blog = ({ blog, actions, match }) => {
  return (
    <div>
      <BlogPage blog={extractBlog(blog)} editBlog={actions.editBlog} deleteBlog={actions.deleteBlog}/>
      <h3>Blog ID: { match.params.id }</h3>
      </div>
  );
};  

Blog.propTypes = {
  match: PropTypes.object,
  blog: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, { match }) => ({
  blog: state.blogs.filter(blog =>
    blog.id !== match.params.id)
});
  
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BlogActions, dispatch)
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Blog);