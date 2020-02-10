import React from 'react'

export default function Game(props) {
  const {id, name, official_url, rating, price, min_players, max_players, image_small, weight_amount} = props

  return (
    <div className='GameItem'>
      <div className='GameItemInfo' >
        
        <a href={official_url}>
          <b>{name}</b>
        </a>

        <div className='FlexItem' >
          <div className='FlexColumn' >
            <i>Rating (1-5): </i>
            <i>Price: </i>
            <i>Players: </i>
            <i>Difficulty (1-5): </i>
          </div>
          <div>
            <div>{rating.toFixed(1)}</div>
            <div>${price}</div>
            <div>{min_players} - {max_players}</div>
            <div>{weight_amount < 5 ? weight_amount : '-'}</div>
          </div>
        </div>

      </div>

      <button className='GameItemButton' onClick={() => props.addToCollection({
        id: id,
        name: name,
        official_url: official_url,
        rating: rating,
        price: price,
        min_players: min_players,
        max_players: max_players,
        image_small: image_small,
        weight_amount: weight_amount
      })} >Add to Collection</button>

      <img className='GameItemImage' src={image_small} />

    </div>
  )
}