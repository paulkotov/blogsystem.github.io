import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';
import * as BlogActions from '../actions';

const App = ({ blogs, actions }) => (
  <div>
    <Header addBlog={actions.addBlog} />
    <Main blogs={blogs} actions={actions} />
  </div>
);

App.propTypes = {
  blogs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BlogActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
