import {Component} from 'react'
import './index.css'
import Emojis from '../Emojis'

class FeedBack extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources
    console.log(emojis)
    return (
      <div className="main-container">
        <div className="small-container">
          <h1>How satisfied are you with our customer support Performance?</h1>
          <ul className="emoji-container">
            {emojis.map(each => (
              <Emojis eachemoji={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default FeedBack
