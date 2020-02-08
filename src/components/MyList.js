import React from 'react'
import MyGame from '../components/MyGame'

export default function MyList(props) {
  let myGamesProperty = props.myGames
  
  let gameCollection = props.myGames.map((game, i) => {
    return <MyGame newUserRating={props.newUserRating}
                   removeFromCollection={props.removeFromCollection}
                   name={myGamesProperty[i].name}
                   rating={myGamesProperty[i].rating}
                   price={myGamesProperty[i].price}
                   min_players={myGamesProperty[i].min_players}
                   max_players={myGamesProperty[i].max_players}
                   id={myGamesProperty[i].id}
                   key={myGamesProperty[i].id} />
  })

  return (
    <div>My Collection
      {gameCollection}
    </div>
  )

}