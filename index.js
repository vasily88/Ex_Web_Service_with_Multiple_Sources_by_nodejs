const express = require('express')
const cors = require('cors')
const connectDB = require('./configs/db')

const usersRouters = require('./routers/usersRouters')

const app = express()
const port = 8000

connectDB()

app.use(cors())
app.use(express.json())

app.use('/users', usersRouters)

app.listen(port,() => {
    console.log(`listening to localhost port ${port}`);
})