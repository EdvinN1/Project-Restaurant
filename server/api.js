import express, { response } from 'express'
const api = express()

api.use(express.json())
api.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

import session from 'express-session'

api.use(session({

   secret: 'keyboard cat dskjdsfkjhrjsd',
   resave: false,
   saveUninitialized: true, // false = create session (cookie) when needed
   cookie: {
      secure: false, // true in production
      httpOnly: true, // cookies are not available in javascript
      maxAge: 365 * 24 * 60 * 60 * 1000 // days * hours * ... ms
   }

}))

import mongoose from 'mongoose'
const conn = "mongodb+srv://projekt:12345@cluster.oduwork.mongodb.net/test"

api.listen(3000, () => {
   console.log(`http://localhost:3000`)
   mongoose.connect(conn, { dbName: 'project' })
      .catch((err) => {
         console.log("Error connecting to database: ", err)
      })
})

//routes
import accountRouter from './routes/accountRoute.js'
api.use('/api/accounts', accountRouter)

import loginRouter from './routes/loginRoute.js'
api.use('/api/login', loginRouter)

import foodItemsRouter from './routes/foodItemsRoute.js'
api.use('/api/fooditems', foodItemsRouter)

import adminRouter from './routes/adminRoute.js';
api.use('/api/admin', adminRouter)
