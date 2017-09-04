import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextArea from 'react-textarea-autosize';

export default class TextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func,
    name: PropTypes.string,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newBlog: PropTypes.bool
  };

  constructor(props){
    super(props);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newBlog) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <TextArea className={
        classnames({
          edit: this.props.editing,
          'newblog': this.props.newBlog
        })}
        name={this.props.name}
        placeholder=" "
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        minRows={6}/>
    );
  }
}
