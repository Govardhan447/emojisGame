import './index.css'

const NavBar = props => {
  const {scoreEmojisList, topScoreNum, macthingEmoji} = props

  const displayScore =
    macthingEmoji !== true ? (
      <div className="score-container-top">
        <p className="score1">score: {scoreEmojisList.length}</p>
        <p className="score1">Top score: {topScoreNum}</p>
      </div>
    ) : (
      ''
    )

  return (
    <div className="navbar-container">
      <div className="img-header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="header-main">Emoji Game</h1>
      </div>
      {displayScore}
    </div>
  )
}
export default NavBar
