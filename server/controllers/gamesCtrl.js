const axios = require('axios')
let allGames = []
let myGames = []
let id = 0

module.exports = {

  showAllGames: async(req, res) => {
    await axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&client_id=gWcywoHkug`).then(response => {
      allGames = response.data.games
    })

    allGames.forEach(game => {
      game.id = id
      id < 99 ? id++ : id = 0
    })
    res.status(200).send({myGames: myGames, allGames: allGames})
  },

  showMyGames: (req, res) => {
    res.status(200).send(myGames)
  },

  addGame: (req, res) => {
    const {game} = req.body
    myGames.push(game)
    
    const index = allGames.findIndex(el => el.id === +game.id)
    allGames.splice(index, 1)
    res.status(200).send({myGames: myGames, allGames: allGames})
  },

  changeRating: (req, res) => {
    const {newRating} = req.body
    const {name} = req.params

    myGames.forEach(game => {game.name === name ? game.rating = newRating : null})
    
    res.status(200).send(myGames)
  },

  removeGame: (req, res) => {
    const {id} = req.params

    const index = myGames.findIndex(el => el.id === +id)
    allGames.push(myGames[index])
    allGames.sort((a, b) => a.id - b.id)
    myGames.splice(index, 1)
    
    res.status(200).send({myGames: myGames, allGames: allGames})
  }

}