import React, { Component } from 'react'
import './Main_OtherArticles.css'

class Main_OtherArticles extends Component {
  constructor() {
    super()
    this.state = {
      otherArticles : [
        {
          img : "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
          alt : "orc",
          p: "Single Orcs in Indianapolis",
        },
        {
          img : "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
          alt : "mountain",
          p: "You won't believe what's under this mountain",
        },
        {
          img : "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
          alt : "gold",
          p: "Mine 20% more gold with One Weird Trick",
        },
        {
          img : "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
          alt : "hobbit",
          p: "Surprise for Indiana Hobbits born before 1999",
        },
      ]
    }
  }

  renderArticle(otherArticle) {
    return (
      <div className="small-6 medium-3 columns other-article">
        <a href="#">
          <img src={otherArticle.img} alt={otherArticle.alt} />
          <p>{otherArticle.p}</p>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        {this.state.otherArticles.map(this.renderArticle)}
      </div>
    )
  }
}

export default Main_OtherArticles
