import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchData: []
  }
  componentDidMount() {
    this.getAllBooks()
  }
  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  searchBooks = (query) => {
    BooksAPI.search(query).then((searchData) => {
      if(searchData !== undefined && searchData.length > 0) {
        this.setState({ searchData })
      } else {
        this.setState((state) => ({
            searchData: []
        }))
      }
      
    })
  }

  getBookById(bookID) {
    let bookShelf
    BooksAPI.get(bookID).then((book) => {
      bookShelf = book.shelf
      return bookShelf
    })
  }

  updateShelf = (book, shelf) => {
    book['shelf'] = shelf
    this.setState((state) => ({
      books: state.books.filter((c) => c.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            searchData={this.state.searchData}
            onSearch={this.searchBooks}
            onUpdateShelf={this.updateShelf}
            getShelf={this.getBookById}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
