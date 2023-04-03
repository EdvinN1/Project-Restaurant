import express from 'express'
const api = express()

api.use(express.json())

import mongoose from 'mongoose'
const conn = "mongodb+srv://projekt:12345@cluster.oduwork.mongodb.net/test"

api.listen(3000, () => {
    console.log(`http://localhost:3000`)
    mongoose.connect(conn, {dbName: 'project'})
    .catch((err) => {
        console.log("Error connecting to database: ", err)
      })
})


api.get('/', async (request, response) => {

    response.json({"result": "created"})

})

//routes
import createAccountRouter from './routes/createAccountRoute.js'
api.use('/api/accounts', createAccountRouter)