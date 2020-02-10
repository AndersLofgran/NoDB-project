const express = require('express')
const cors = require('cors')
const gamesCtrl = require('./controllers/gamesCtrl')

const app = express()
const PORT = 4800

app.use(express.json())
app.use(cors())


app.get('/api/all-games', gamesCtrl.showAllGames)
app.get('/api/my-games', gamesCtrl.showMyGames)
app.post('/api/my-games', gamesCtrl.addGame)
app.put('/api/my-games/:name', gamesCtrl.changeRating)
app.delete('/api/my-games/:id', gamesCtrl.removeGame)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))