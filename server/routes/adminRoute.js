import Router from "express";
const adminRouter = Router()
import mongoose, { Schema } from 'mongoose'


/*   adminRouter.use(Router.json())
  adminRouter.use((request, response, next) => {
      response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
      response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      next();
    }); */

const ordersSchema = new Schema({
    orderID: Number,
    orderDate: Number,
    restaurantID: Number
})

if(!mongoose.models.orders){
    mongoose.model('orders', ordersSchema)
}

adminRouter.post('/', async(request, response) => {
    const order = new mongoose.models.orders();
    order.orderID = request.body.orderID
    order.orderDate = request.body.orderDate
    order.restaurantID = request.body.restaurantID
    await order.save()
    response.sendStatus(201)
})

adminRouter.get('/', async (request, response) => {
    const order = await mongoose.models.orders.find();
    response.json(order);
})

adminRouter.delete('/', async (request, response) => {
    const deleteAll = await mongoose.models.orders.deleteMany({});
    response.json(deleteAll);
})

export default adminRouter