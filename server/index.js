const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4321

const travelController = require('./controllers/travelController')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4321'
}))

app.get('/api/travel', travelController.getDestination)
app.post('/api/travel', travelController.addDestination)
app.delete('/api/travel/:id', travelController.deleteDestination)
app.put('/api/travel/:id', travelController.addReview)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))