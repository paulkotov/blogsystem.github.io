import * as types from '../constants/ActionTypes';

export const addBlog = (title, text, link) => ({ type: types.ADD_BLOG, title, text, link });
export const deleteBlog = id => ({ type: types.DELETE_BLOG, id });
export const editBlog = (id, title, text) => ({ type: types.EDIT_BLOG, id, title, text });
