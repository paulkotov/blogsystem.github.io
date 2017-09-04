import * as types from '../constants/ActionTypes';
import * as actions from './index';
import { expect } from 'chai';

describe('BLOG actions', () => {
  it('addBlog should create ADD_BLOG action', () => {
    expect(actions.addBlog('Title', 'Text', '')).to.deep.equal({
      type: types.ADD_BLOG,
      title: 'Title',
      text: 'Text',
      link: ''
    });
  });

  it('deleteBlog should create DELETE_BLOG action', () => {
    expect(actions.deleteBlog(1)).to.deep.equal({
      type: types.DELETE_BLOG,
      id: 1
    });
  });

  it('editBlog should create EDIT_BLOG action', () => {
    expect(actions.editBlog(1, 'Title', 'Text')).to.deep.equal({
      type: types.EDIT_BLOG,
      id: 1,
      title: 'Title',
      text: 'Text'
    });
  });

});
