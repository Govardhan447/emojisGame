import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, emojiScore} = props

  const {id, emojiName, emojiUrl} = emojiCardDetails

  const onclickEmoji = () => {
    emojiScore(id)
  }

  return (
    <li>
      <button className="emoji-btn" type="button" onClick={onclickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
