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
    res.status(200).send(allGames)
  },

  showMyGames: (req, res) => {
    res.status(200).send(myGames)
  },

  addGame: (req, res) => {
    const {game} = req.body
    myGames.push(game)
    
    // const {id} = req.params
    // const index = allGames.findIndex(game => game.id === +id)
    // allGames.splice(index, 1)

    res.status(200).send(myGames)
    // res.status(200).send(allGames)
  },

  changeRating: (req, res) => {
    const {newRating} = req.body
    const {id} = req.params

    const index = myGames.findIndex(game => game.id === +id)
    myGames[index].average_user_rating = newRating
    
    res.status(200).send(myGames)
  },

  removeGame: (req, res) => {
    const {id} = req.params

    const index = myGames.findIndex(game => game.id === +id)
    myGames.splice(index, 1)
    
    res.status(200).send(myGames)
  }

}