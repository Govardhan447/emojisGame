/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const selectedEmojisList = []
class EmojiGame extends Component {
  state = {
    scoreEmojisList: selectedEmojisList,
    macthingEmoji: false,
    topScore: 0,
  }

  emojiScore = id => {
    const {emojisList} = this.props
    const {scoreEmojisList} = this.state

    const scorelen = scoreEmojisList.length
    const compareEmojis = scoreEmojisList.filter(eachItem => eachItem.id === id)

    if (scorelen <= 12 && compareEmojis.length === 0) {
      const getSelectEmoji = emojisList.filter(eachItem => id === eachItem.id)

      this.setState(prevState => ({
        scoreEmojisList: [...prevState.scoreEmojisList, getSelectEmoji[0]],
      }))
    } else {
      const {topScore} = this.state
      this.setState({macthingEmoji: true})

      if (topScore < scorelen) {
        this.setState({topScore: scoreEmojisList.length})
      }
    }
  }

  playGame = status => {
    if (status) {
      this.setState({
        scoreEmojisList: selectedEmojisList,
        macthingEmoji: false,
      })
    }
  }

  playEmojis = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    const {macthingEmoji, scoreEmojisList} = this.state

    return macthingEmoji ? (
      <WinOrLoseCard
        playGame={this.playGame}
        scoreEmojisList={scoreEmojisList}
      />
    ) : (
      <ul className="emojisList-container">
        {shuffledEmojisList.map(eachItem => (
          <EmojiCard
            emojiCardDetails={eachItem}
            key={eachItem.id}
            emojiScore={this.emojiScore}
            compareEmoji={this.compareEmoji}
            scoreEmojisListItems={scoreEmojisList}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {scoreEmojisList, topScore, macthingEmoji} = this.state

    return (
      <div className="bg-container">
        <NavBar
          scoreEmojisList={scoreEmojisList}
          topScoreNum={topScore}
          macthingEmoji={macthingEmoji}
        />
        <div className="list-container">{this.playEmojis()}</div>
      </div>
    )
  }
}

export default EmojiGame
