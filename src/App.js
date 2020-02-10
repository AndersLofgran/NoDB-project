import React from 'react';
import Header from './components/Header'
import GameList from './components/GameList'
import MyList from './components/MyList'
import axios from 'axios'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allGames: [],
      myGames: []
    }
  }
  
  componentDidMount() {
    axios.get('/api/all-games').then(res => {
      this.setState({myGames: res.data.myGames, allGames: res.data.allGames})
    })
  }

  addToCollection = (game) => {
    axios.post(`/api/my-games`, {game}).then(res => {
      this.setState({myGames: res.data.myGames, allGames: res.data.allGames})
    })
  }

  newUserRating = (name, newRating) => {
    console.log('name: ', name);
    axios.put(`/api/my-games/${name}`, {newRating: Number(newRating)}).then(res => {
      this.setState({myGames: res.data})
    })
  }

  removeFromCollection = (id) => {
    axios.delete(`/api/my-games/${id}`).then(res => {
      this.setState({myGames: res.data.myGames, allGames: res.data.allGames})
    })
  }

  render() {
    return (
      <>
        <Header />
        <div className='App'>
          <MyList myGames={this.state.myGames}
                  newUserRating={this.newUserRating}
                  removeFromCollection={this.removeFromCollection} />
          <GameList allGames={this.state.allGames}
                    addToCollection={this.addToCollection} />
        </div>
      </>
    )
  }
}