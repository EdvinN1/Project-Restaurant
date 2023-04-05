import express, { response } from 'express'
const api = express()

api.use(express.json())
api.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

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

import adminRouter from './routes/adminRoute.js';
api.use('/api/admin', adminRouter)