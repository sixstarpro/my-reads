import React, { Component } from 'react'

class Book extends Component {

    render() {
        const { books, book, onUpdateShelf } = this.props
        const noCoverImageUrl = require(`./images/book_noCover.jpg`)

        const getShelfById = (book) => {
           let match = books.filter((i) => i.id === book.id)
           match = match[0] ? match[0]['shelf'] : null
           return match
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCoverImageUrl})` }}>
                        </div>
                        <div className="book-shelf-changer">
                        <select
                            onChange={(e) => onUpdateShelf(book, e.target.value)}
                            value={book.shelf || getShelfById(book) || 'none'}
                        >
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.map((author, index) => (
                        index === 0 ? author : ', ' + author )) : ''}
                    </div>
                </div>
            </li>
        )
      }
    }

export default Book