import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import NoMatch from './NoMatch'
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
        this.clearSearch()
      }
      
    })
  }

  clearSearch = () => {
    this.setState((state) => ({
        searchData: []
    }))
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then( () => {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <BookShelf
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )} />
          <Route path='/search' render={() => (
            <SearchBooks
              books={this.state.books}
              searchData={this.state.searchData}
              onSearch={this.searchBooks}
              onClearSearch={this.clearSearch}
              onUpdateShelf={this.updateShelf}
            />
          )} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
