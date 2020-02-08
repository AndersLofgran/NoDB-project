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
      this.setState({allGames: res.data})
    })
  }

  addToCollection = (game) => {
    axios.post(`/api/my-games`, {game}).then(res => {
      this.setState({myGames: res.data})
      // axios.delete(`/api/all-games/${id}`).then(res => {
      //   this.setState({allGames: res.data})
      // })
    })
  }

  newUserRating = (id, newRating) => {
    axios.put(`/api/my-games/${id}`, {newRating}).then(res => {
      this.setState({myGames: res.data})
    })
  }

  removeFromCollection = (id) => {
    axios.delete(`/api/my-games/${id}`).then(res => {
      this.setState({myGames: res.data})
    })
  }

  render() {
    return (
      <>
        <Header />
        <div className='App'>
          <MyList myGames={this.state.myGames}
                  newUserRating={this.updateGameRating}
                  removeFromCollection={this.removeFromCollection} />
          <GameList allGames={this.state.allGames}
                    addToCollection={this.addToCollection} />
        </div>
      </>
    )
  }
}