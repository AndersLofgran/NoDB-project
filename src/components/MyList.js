import React from 'react'
import MyGame from '../components/MyGame'

export default function MyList(props) {
  let myGamesProperty = props.myGames
  
  let gameCollection = props.myGames.map((game, i) => {
    return <MyGame newUserRating={props.newUserRating}
                   removeFromCollection={props.removeFromCollection}
                   name={myGamesProperty[i].name}
                   official_url={myGamesProperty[i].official_url}
                   rating={myGamesProperty[i].rating}
                   price={myGamesProperty[i].price}
                   min_players={myGamesProperty[i].min_players}
                   max_players={myGamesProperty[i].max_players}
                   image_small={myGamesProperty[i].image_small}
                   weight_amount={myGamesProperty[i].weight_amount}
                   id={myGamesProperty[i].id}
                   key={myGamesProperty[i].id} />
  })

  return (
    <>
      <div className='MyCollectionContainer' >
        <div className='MyCollectionHeader'>
          <h2>My Collection</h2>
        </div>
        {gameCollection}
      </div>
    </>
  )

}