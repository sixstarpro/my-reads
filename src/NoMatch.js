import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NoMatch extends Component {

    render() {

        return (
            <pre>
                <h1>Page not found</h1>
                <Link to='/'>Back to HomePage</Link>
            </pre>
        )
        
      }
    }

export default NoMatch