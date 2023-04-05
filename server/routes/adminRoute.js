import Router from "express";
import cors from "cors";
const adminRouter = Router()
import mongoose, { Schema } from 'mongoose'

adminRouter.use(cors());

const ordersSchema = new Schema({
    orderID: Number,
    orderDate: Number,
    restaurantID: Number
})

if (!mongoose.models.orders) {
    mongoose.model('orders', ordersSchema)
}

adminRouter.post('/', async (request, response) => {
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

adminRouter.delete('/orders', async (request, response) => {
    const orderToDelete = request.body;
    const deleteResult = await mongoose.models.orders.deleteOne({ _id: orderToDelete._id });
    response.json(deleteResult);
})

export default adminRouter