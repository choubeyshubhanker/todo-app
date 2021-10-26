import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <a className="navbar-brand" href="/">{props.title}</a> 
        
      </nav>
    )
}
Header.defaultProps={
  title: "Your Title Goes Here" //This is used when title is not passed by user for the Header
}

Header.propTypes = {
  title: PropTypes.string
}