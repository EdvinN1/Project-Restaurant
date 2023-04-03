import express, { response } from 'express'
const api = express()

api.use(express.json())
api.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

import mongoose, { Schema } from 'mongoose'
const conn = "mongodb+srv://projekt:12345@cluster.oduwork.mongodb.net/test"

api.listen(3000, () => {
    console.log(`http://localhost:3000`)
    mongoose.connect(conn, {dbName: 'project'})
    .catch((err) => {
        console.log("Error connecting to database: ", err)
      })
})

const ordersSchema = new Schema({
    orderID: String,
    orderDate: String,
    restaurantID: Number
})

if(!mongoose.models.orders){
    mongoose.model('orders', ordersSchema)
}

api.post('/orders', async(request, response) => {
    const order = new mongoose.models.orders();
    order.orderID = request.body.orderID
    order.orderDate = request.body.orderDate
    order.restaurantID = request.body.restaurantID
    await order.save()
    response.sendStatus(201)
})

/* api.post('/orders', async(request, response) => {
    const { orderId, orderDate, restaurantID } = request.body;

    const order = new order({ orderId, orderDate, restaurantID });

    console.log(data);
    await data.save();
    response.json({messsage: 'data recieved'});
}) */

/* api.post('/orders', async(request, response) => {
    const order = new mongoose.model.orders();
    order.orderID = "123"
    order.orderDate = "230403"
    order.restaurantID = 1
}) */

api.get('/orders', async (request, response) => {
    const order = await mongoose.models.orders.find();
    response.json(order);
    /* response.json({"result": "hejsan"}) */
})

api.delete('/orders', async (request, response) => {
    const deleteAll = await mongoose.models.orders.deleteMany({});
    response.json(deleteAll);
})

api.get('/', async (request, response) => {
    response.json({"result": "created"})
})