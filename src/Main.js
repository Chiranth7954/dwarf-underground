import React, { Component } from 'react'
import Main_Byline from './Main_Byline'
import Main_Article from './Main_Article'
import Main_Links from './Main_Links'
import Main_Ad from './Main_Ad'
import Main_OtherArticles from './Main_OtherArticles'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main className="expanded row">
        <div className="large-8 medium-12 columns article">
          <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
          <Main_Byline />
          <Main_Article />
          <Main_Links />
        </div>
        <aside className="large-4 medium-12 columns">
          <Main_Ad />
        </aside>
        <Main_OtherArticles />
      </main>
    )
  }
}

export default Main
