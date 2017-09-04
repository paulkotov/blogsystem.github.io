import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextInput from './TextInput';
import TitleInput from './TitleInput';
import './BlogItem.css';
import Image from './Image';
import { Link, Redirect } from 'react-router-dom';

export default class BlogPage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    editBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired
  };

  constructor(){
    super();  
    this.state = {
      editing: false,
      id: 0,
      title: '',
      text: '',
      img: {
        link: '',
        width: 145,
        height: 205
      }
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]: '' });
    }
  }   
  
  onBtnClickHandler = (BlogId) => e => {
    e.preventDefault();
    this.setState({ id: BlogId }); 
    const title = this.TitleInput.state.text;
    const text = this.TextInput.state.text;
        
    this.props.editBlog(this.state.id, title, text);
    this.setState({ editing: false });
  }

  goBack = () => (
    < Redirect to="/" />
  );

  render() {
    const { blog, deleteBlog } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <div className="edit">
          <TitleInput text={blog.title}
                      ref={input => this.TitleInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'TitleIsEmpty')} 
          /><br/>
          <br/>
          <TextInput text={blog.text} 
                      ref={input => this.TextInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'titleIsEmpty')} 
          /><br/>
          <button className="Save" 
                  onClick={this.onBtnClickHandler(blog.id)} > Save </button>            
        </div>
    );
    } else {
      element = (
        <div className="view">
              {' Added: '} <strong>{blog.date}</strong><br/>{' Title: '}
              <strong>{blog.title}</strong><br/> {' Text: '}
              <strong>{blog.text}</strong><br/>    
              <Image className="thumbnail" image={blog.img.link} data-title="Load cover image"/><br/>
            <div className="Blog-info">
              <button className="editBlog btn btn-default" 
                  onClick={() => {this.setState({ editing: true });}} > Edit </button>
              <button className="deleteBlog btn btn-default" 
                  onClick={() => { 
                    deleteBlog(blog.id);
                    this.goBack();} 
                    }> Delete </button><br/>
                    <Link to="/" replace>Back</Link>
              </div>        
        </div>
      );
    }

    return (
      <div className={classnames({
        completed: blog.completed,
        editing: this.state.editing,
        'list-group-item': true
      })}>
        {element}
      </div>
    );
  }
}  