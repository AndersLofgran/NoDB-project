import React from 'react'

export default class MyGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      userInput: ''
    }
  }

  handleInputChange = () => {}
  toggleEdit = () => {}

  render() {
    const {id, name, rating, price, min_players, max_players} = this.props

    return (
      <div className='GameContainerCollection'>

        <b>{name}</b>
        <div>Rating: {rating.toFixed(1)}</div>
        <div>Price: ${price}</div>
        <div>{min_players} - {max_players} Players</div>
        <button onClick={() => this.props.removeFromCollection(id)}>Remove</button>

      </div>
    )
  }
}