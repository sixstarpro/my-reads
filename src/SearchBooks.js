import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
   static propTypes = {
       books: PropTypes.array.isRequired,
       searchData: PropTypes.array.isRequired,
       onSearch: PropTypes.func.isRequired,
       onUpdateShelf: PropTypes.func.isRequired
   }
   
   clearQuery = () => {
       this.onSearch('')
   }
  
   render() {
       const { books, searchData, onSearch, onUpdateShelf } = this.props

       const getShelfById = (book) => {
           let match = books.filter((i) => i.id === book.id)
           match =  match[0] ? match[0]['shelf'] : null
           return match
       }

       return (
           <div className="search-books">
               <div className="search-books-bar">
                   <Link className="close-search" to='/' onClick={this.clearQuery}>Close</Link>
                   <div className="search-books-input-wrapper">
                       {/*
                       NOTES: The search from BooksAPI is limited to a particular set of search terms.
                       You can find these search terms here:
                       https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                       However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                       you don't find a specific author or title. Every search is limited by search terms.
                       */}
                       <input
                           type="text"
                           placeholder="Search by title or author"
                           onChange={(e) => onSearch(e.target.value)}
                       />

                   </div>
               </div>

               <div className="search-books-results">
                   <ol className="books-grid">
                       {searchData.map((books) => (
                           <li key={books.id}>
                               <div className="book">
                                   <div className="book-top">
                                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks && books.imageLinks.thumbnail ? books.imageLinks.thumbnail : 'http://via.placeholder.com/128x193/fffef1/60ac5d?text=No+Cover'})` }}></div>
                                       <div className="book-shelf-changer">
                                           <select
                                               onChange={(e) => onUpdateShelf(books, e.target.value)}
                                               value={books.shelf || getShelfById(books) || 'none'}
                                           >
                                               <option value="" disabled>Move to...</option>
                                               <option value="currentlyReading">Currently Reading</option>
                                               <option value="wantToRead">Want to Read</option>
                                               <option value="read">Read</option>
                                               <option value="none">None</option>
                                           </select>
                                       </div>
                                   </div>
                                   <div className="book-title">{books.title}</div>
                                   <div className="book-authors">{books.authors? books.authors.map((author, index) => (
                                       index === 0 ? author : ', ' + author
                                   )) : ''}
                                   </div>
                               </div>
                           </li>
                       ))}
                   </ol>
               </div>
           </div>
       )
   }
}

export default SearchBooks
