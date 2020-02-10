import React from 'react'
import Game from '../components/Game'

export default class GameList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  handleInputChange = (ev) => {
    this.setState({searchInput: ev.target.value})
  }

  render() {
    let allGamesProperty = this.props.allGames
    
    const filteredList = this.props.allGames
    .filter(game => game.name.includes(this.state.searchInput))

    const displayedList = filteredList
    .map((game, i) => <Game addToCollection={this.props.addToCollection}
                            name={allGamesProperty[i].name}
                            official_url={allGamesProperty[i].official_url}
                            rating={allGamesProperty[i].average_user_rating ? allGamesProperty[i].average_user_rating : allGamesProperty[i].rating}
                            price={allGamesProperty[i].price}
                            min_players={allGamesProperty[i].min_players}
                            max_players={allGamesProperty[i].max_players}
                            image_small={allGamesProperty[i].images ? allGamesProperty[i].images.small : allGamesProperty[i].image_small}
                            weight_amount={allGamesProperty[i].weight_amount}
                            id={allGamesProperty[i].id}
                            key={allGamesProperty[i].id} />)
    
    return (
      <>
        <div className='GameListContainer' >
          <input onChange={this.handleInputChange} className='SearchInput' placeholder='Search by name' />
          {displayedList}
        </div>
      </>
    )
  }
}