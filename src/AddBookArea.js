import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book'
import App from "./App"

class AddBookArea extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this)
  }
    handleChange(event) {
        this.props.getBookTitle(event.target.value)
    }

    render() {
       return(
        <div>
            <textarea name="AddBookName" id="addBookName" onChange={this.handleChange}></textarea>
            <button onClick={this.props.addBook}>Add Book</button>
        </div>
       )
    }
}

export default AddBookArea;