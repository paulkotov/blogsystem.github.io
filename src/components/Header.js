import React, { PropTypes, Component } from 'react';
import TitleInput from './TitleInput';
import TextInput from './TextInput';
import Image from './Image';
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    addBlog: PropTypes.func.isRequired
  }

  constructor(){
    super();
    this.state = {
      title: '',
      text: '',
      link: '',
      width: 145,
      height: 205
    };
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]:true });
    }
  }
  
  onClickHandler = () => {
    this.refs.photo.click();
  }

  onAddBlogHandler = e => {
    e.preventDefault();
    const title = this.TitleInput.state.text;
    const text = this.TextInput.state.text;
    const link = this.state.link;
    this.props.addBlog(title, text, link);
    this.TitleInput.state.text='';
    this.TextInput.state.text ='';
    this.setState({ link: '' });
  }

  loadCoverImage = event => {
    let file = event.target.files[0];
    let fileReader = new FileReader();
      
    fileReader.onload = fileEvent => {
      this.setState({ link: fileEvent.target.result });
    };
 
    fileReader.readAsDataURL(file);
  }

  
  render() {
    return (
      <div>
        <h1 className="title">Library</h1>
        <header className="header">
          Add Blog<br/>
          <div className="cover" onClick={this.onClickHandler}>
            <Image className="thumbnail" image={this.state.link} data-title="Load cover image"/><br/>
            <input id="BlogCover" 
                    type="file" 
                    className="cover-hiddenElement" 
                    ref="photo" 
                    onChange={this.loadCoverImage.bind(this)}/>
          </div>
          <form className='add-blog'>
          <TitleInput newBlog
                        className="add_title"
                        ref={input => this.TitleInput = input}
                        onChange={this.onFieldChange.bind(this, 'titleIsEmpty')}
                        placeholder="Title" 
                        width=""
                        height="" /><br/>
                        <br/>
          {/* <TextInput newBlog
                        className="add_title"
                        ref={input => this.TitleInput = input}
                        onChange={this.onFieldChange.bind(this, 'titleIsEmpty')}
                        placeholder="Title" /> */}
          <TextInput newBlog
                        className="add_text"
                        ref={input => this.TextInput = input}
                        onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                        placeholder="Text"
                        width="400"
                        height="100"/><br/>              
          <button className="add btn btn-default" 
                    onClick={this.onAddBlogHandler}
                    ref='alert_button'>
                    Add Blog
          </button>  
        </form>
      </header>
    </div>
    );
  }
}
