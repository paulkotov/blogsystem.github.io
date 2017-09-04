import React from 'react';
import BlogItem from './BlogItem';
import { shallow } from 'enzyme';
import { expect } from 'chai';

const props = {
  blog: {
    title: 'Title',
    text: 'Text',
    id: 1,
    img: {
      link: '',
      width: 145,
      height: 205
    }
  },
  editBlog: function(title, text, link){
    return { 
      type: 'EDIT_BLOG', 
      payload: {
        title: title, 
        text: text, 
        link: link }
    };
  },

  deleteBlog: function(){
    return {};
  },
  completeBlog: function(){
    return {};
  }
};

describe('BlogItem', () => {
  it('should have been rendered properly', () => {
    const _wrapper = shallow(<BlogItem {...props} />);
    expect(_wrapper.node.type).to.equal('li');
    expect(_wrapper.node.props.className).to.equal('list-group-item');

  });
});


