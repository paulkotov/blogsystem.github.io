import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './BlogItem.css';
import Image from './Image';
import { Link } from 'react-router-dom';

export default class BlogItem extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  };

  constructor(){
    super();  
    this.state = {
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


  render() {
    const { blog } = this.props;
    let element = (
        <div className="view">
              {' Added: '} <strong>{blog.date}</strong><br/>{' Title: '}
              <strong>{blog.title}</strong><br/> {' Text: '}
              <strong><Link to={`/blogs/${blog.id}`}>{blog.annotation}</Link></strong><br/>    
            <Image className="thumbnail" image={blog.img.link} data-title="Load cover image"/><br/> 
        </div>
      );
    

    return (
      <li className={classnames({
        completed: blog.completed,
        'list-group-item': true
      })}>
        {element}
      </li>
    );
  }
}  