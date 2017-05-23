import React, { Component } from 'react'

class Main_Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment : '',
    }

    this.updateComment = this.updateComment.bind(this)
  }

  updateComment(ev) {
    this.setState({
      comment : ev.target.value,
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <textarea value={this.state.comment} onChange={this.updateComment} placeholder="Enter comment here"></textarea>
        <button className="button">Submit comment!</button>
      </div>
    )
  }
}

export default Main_Comments
