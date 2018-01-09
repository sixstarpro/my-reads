import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onUpdateShelf } = this.props

        function getShelf(shelf) {
          return books.filter(bookShelf => bookShelf.shelf === shelf)
        }
        return (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {getShelf('currentlyReading').map((books) => (
                        <li key={books.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail ? books.imageLinks.thumbnail : 'http://via.placeholder.com/128x193/fffef1/60ac5d?text=No+Cover'})` }}></div>
                              <div className="book-shelf-changer">
                                <select
                                  onChange={(e) => onUpdateShelf(books, e.target.value)}
                                  value={books.shelf}
                                >
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{books.title}</div>
                            <div className="book-authors">{books.authors ? books.authors.map((author, index) => (
                                index === 0 ? author : ', ' + author 
                            )) : ''}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {getShelf('wantToRead').map((books) => (
                        <li key={books.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail ? books.imageLinks.thumbnail : 'http://via.placeholder.com/128x193/fffef1/60ac5d?text=No+Cover'})` }}></div>
                              <div className="book-shelf-changer">
                              <select
                                  onChange={(e) => onUpdateShelf(books, e.target.value)}
                                  value={books.shelf}
                                >
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{books.title}</div>
                            <div className="book-authors">{books.authors ? books.authors.map((author, index) => (
                                index === 0 ? author : ', ' + author 
                            )) : ''}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {getShelf('read').map((books) => (
                        <li key={books.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail ? books.imageLinks.thumbnail : 'http://via.placeholder.com/128x193/fffef1/60ac5d?text=No+Cover'})` }}></div>
                              <div className="book-shelf-changer">
                                <select
                                  onChange={(e) => onUpdateShelf(books, e.target.value)}
                                  value={books.shelf}
                                >
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{books.title}</div>
                            <div className="book-authors">{books.authors ? books.authors.map((author, index) => (
                                index === 0 ? author : ', ' + author 
                            )) : ''}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
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