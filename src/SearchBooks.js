import React, { Component } from 'react'
import Book from './book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
   static propTypes = {
       books: PropTypes.array.isRequired,
       searchData: PropTypes.array.isRequired,
       onSearch: PropTypes.func.isRequired,
       onClearSearch: PropTypes.func.isRequired,
       onUpdateShelf: PropTypes.func.isRequired
   }
  
   render() {
       const { books, searchData, onSearch, onClearSearch, onUpdateShelf } = this.props

       return (
           <div className="search-books">
               <div className="search-books-bar">
                   <Link className="close-search" to='/' onClick={() => onClearSearch()}>Close</Link>
                   <div className="search-books-input-wrapper">
                       <input
                           type="text"
                           placeholder="Search by title or author"
                           onChange={(e) => e.target.value.length > 0 ? onSearch(e.target.value) : onClearSearch()}
                       />

                   </div>
               </div>

               <div className="search-books-results">
                   <ol className="books-grid">
                       {searchData.map((book) => (
                          <Book key={book.id}
                            books={books}
                            book={book}
                            onUpdateShelf={onUpdateShelf}
                        />
                       ))}
                   </ol>
               </div>
           </div>
       )
   }
}

export default SearchBooks
