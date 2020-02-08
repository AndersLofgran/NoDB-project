import React from 'react'
import Game from '../components/Game'

export default class GameList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  handleInputChange = () => {}

  render() {
    let allGamesProperty = this.props.allGames
    
    const listOfGames = this.props.allGames
      .filter(game => game.name.includes(this.state.searchInput))
      .map((game, i) => <Game addToCollection={this.props.addToCollection}
                              name={allGamesProperty[i].name}
                              rating={allGamesProperty[i].average_user_rating}
                              price={allGamesProperty[i].price}
                              min_players={allGamesProperty[i].min_players}
                              max_players={allGamesProperty[i].max_players}
                              id={allGamesProperty[i].id}
                              key={allGamesProperty[i].id} />)
    
    return (
      <>
        <div>
          <input />
          <button>Search</button>
        </div>
        <div>{listOfGames}</div>
      </>
    )
  }
}