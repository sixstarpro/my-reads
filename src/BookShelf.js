import React, { Component } from 'react'
import Book from './book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onUpdateShelf } = this.props
        const shelves = [{id: 'currentlyReading', copy: 'Currently Reading'}, {id: 'wantToRead', copy: 'Want to Read'}, {id: 'read', copy: 'Read'}]

        return (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => (
                <div className="bookshelf" key={shelf.id}>
                  <h2 className="bookshelf-title">{shelf.copy}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === shelf.id).map((book) => (
                        <Book key={book.id}
                          book={book}
                          onUpdateShelf={onUpdateShelf}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>

        )
      }
    }

export default BookShelf