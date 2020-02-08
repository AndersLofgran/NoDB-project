import React from 'react'

export default function Game(props) {
  const {id, name, rating, price, min_players, max_players} = props

  return (
    <div className='GameContainerAll'>

      <b>{name}</b>
      <div>Rating: {rating.toFixed(1)}</div>
      <div>Price: ${price}</div>
      <div>{min_players} - {max_players} Players</div>
      <button onClick={() => props.addToCollection({
        id: id,
        name: name,
        rating: rating,
        price: price,
        min_players: min_players,
        max_players: max_players
      })} >Add to Collection</button>

    </div>
  )
}