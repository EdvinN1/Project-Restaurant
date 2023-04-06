import Router from "express";
const adminRouter = Router()
import mongoose, { Schema } from 'mongoose'


const ordersSchema = new Schema({
    orderID: Number,
    orderDate: Number,
    restaurantID: Number,
    accepted: {type:Boolean, default:false}
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
    const deleteResult = await mongoose.models.orders.deleteMany({accepted: false});
    response.json(deleteResult);
})

adminRouter.delete('/:id', async (request, response) => {
    const orderId = request.params.id;
    const deleteResult = await mongoose.models.orders.deleteOne({ _id: orderId });
    response.json(deleteResult);
  });
  

adminRouter.patch('/:id', async (request, response) => {
    try {
        const orderId = request.params.id;
        const modifiedResult = await mongoose.models.orders.findOneAndUpdate(
          {_id: orderId},
          { accepted: true },
          { new: true }
        );
        response.json(modifiedResult);
      } catch (error) {
        console.error('Error:', error);
        response.status(500).json({ message: 'Internal server error' });
      }
})

export default adminRouter