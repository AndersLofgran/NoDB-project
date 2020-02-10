import React from 'react'

export default class MyGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      userInput: 0
    }
  }

  handleInputChange = (ev) => {
    this.setState({userInput: ev.target.value})
  }
  toggleEdit = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  render() {
    const {id, name, official_url, rating, price, min_players, max_players, image_small, weight_amount} = this.props

    return (
      <div className='MyGameItem'>
        <div className='GameItemInfo' >
        <a href={official_url}>
          <b>{name}</b>
        </a>
          {this.state.isEditing
            ?
              (<div className='FlexItem' >
                  <input type='number' onChange={this.handleInputChange} />
                  <button onClick={() => {
                    this.props.newUserRating(name, this.state.userInput)
                    this.toggleEdit()
                  }} >Save</button>
              </div>)
            : 
              (<div className='FlexItem' >
                <div><i>Rating (1-5): </i>{rating.toFixed(1)}</div>
                <button onClick={this.toggleEdit} >Edit</button>
              </div>)
          }
          <div><i>Price: </i>${price}</div>
          <div><i>Players: </i>{min_players} - {max_players}</div>
          <div><i>Difficulty (1-5): </i>{weight_amount < 5 ? weight_amount : '-'}</div>
        </div>

        <button className='GameItemButton'
                onClick={() => this.props.removeFromCollection(id)}
        >Remove from Collection</button>

        <img className='GameItemImage' src={image_small} />

      </div>
    )
  }
}