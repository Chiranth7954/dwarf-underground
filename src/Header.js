import React, { Component } from 'react'
import Header_Logo from './Header_Logo'
import Header_NavLinks from './Header_NavLinks'
import './Header.css'

const links = ['home', 'about', 'login']

class Header extends Component {
  render() {
    return (
      <div className="expanded row header">
        <div className="clearfix">
          <Header_Logo />
          <Header_NavLinks links={links}/>
        </div>
        <div className="headline text-center small-12 columns">
          <h1>The Dwarf Underground</h1>
          <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
        </div>
      </div>
    )
  }
}

export default Header
