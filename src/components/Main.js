import React, { Component, PropTypes } from 'react';
import BlogItem from './BlogItem';
import Footer from './Footer';

export default class Main extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(){
    super();
    this.state = { 
      filter: 'SHOW_ALL',
      title: '' 
    };
  }

  handleShow = filter => {
    this.setState({ 
      filter: 'TITLE', 
      title: filter });
  }

  renderToggleAll(completedCount) {
    const { blogs, actions } = this.props;
    if (blogs.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === blogs.length}
               onChange={actions.completeAll} />
      );
    }
  }

  resetFilter = () => {
    this.setState({
      filter: 'SHOW_ALL',
      title: ''
    });
  }

  renderFooter(count) {
    const { blogs } = this.props;
    const { filter } = this.state;

    if (blogs.length) {
      return (
        <div>
        <Footer filter={filter}
                onShow={this.handleShow}
                count={count} />
        <button onClick={this.resetFilter}> Reset </button>
        </div>        
      );
    }
  }

  render() {
    const { blogs } = this.props;

    const filteredBlogs = blogs.filter((elem) => {
      switch(this.state.filter){     
        case 'TITLE': 
          return (elem.title === this.state.title) ? true : false;

        default:
          return true;
      }
    });  
    const count = blogs.length;
    
    return (
      <div className="main">
        <ul className="books-list list-group">
          {filteredBlogs.map(blog =>
            <BlogItem key={blog.id} blog={blog} />
          )}
        </ul>
        {this.renderFooter(count)}
      </div>
    );
  }
}
