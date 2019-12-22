import React from 'react';
import './App.css';
import AddBookArea from './AddBookArea'
import Book from './Book'

class App extends React.Component {
    state = {
      bookTitle: "",
      books: []
    }
  addBook = () => {
    const name = this.state.bookTitle
    const newBook = <Book title={name}></Book>
    console.log(newBook)
    this.setState( state => {
      const books = state.books.concat(newBook)
     
      return {
        books
      }
    })
    console.log(this.state.books)
  }
  getBookTitle = (title) => {
    this.setState({
      bookTitle: {title}
    })
  }
  render() {
    return (
      <div>
        <h1>My Digital Library</h1>
        {this.state.books}
        <AddBookArea addBook={this.addBook} getBookTitle={this.getBookTitle}></AddBookArea>
      </div>
  );
  }
}

export default App;
