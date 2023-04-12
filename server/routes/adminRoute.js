import Router from "express";
const adminRouter = Router()
import mongoose, { Schema } from 'mongoose'
let orderID = 1001;

const ordersSchema = new Schema({
  orderID: Number,
  orderDate: String,
  restaurantID: Number,
  items: [{
    itemName: String,
    quantity: Number
  }],
  accepted: { type: Boolean, default: false },
  customerName: String
})

if (!mongoose.models.orders) {
  mongoose.model('orders', ordersSchema)
}

adminRouter.post('/', async (request, response) => {
  const order = new mongoose.models.orders();
  order.orderID = orderID += 1;
  order.orderDate = getDate();
  order.restaurantID = Math.floor(Math.random() * 5 + 1); //just a random number to simulate a restaurant
  order.items = request.body.items;
  order.customerName = request.body.customerName;
  await order.save();
  response.sendStatus(201);
})

//return a string so its easier to read for the human eye
function getDate() {
  const currentDate = new Date();
  const orderDate = currentDate.toISOString().slice(0, 10) + ' '
    + currentDate.getHours() + ':'
    + currentDate.getMinutes()
  return orderDate;
}

adminRouter.get('/', async (request, response) => {
  const order = await mongoose.models.orders.find();
  response.json(order);
})

//delete all
adminRouter.delete('/', async (request, response) => {
  const deleteResult = await mongoose.models.orders.deleteMany({ accepted: false });
  response.json(deleteResult);
})

//delete one
adminRouter.delete('/:id', async (request, response) => {
  const orderId = request.params.id;
  const deleteResult = await mongoose.models.orders.deleteOne({ _id: orderId });
  response.json(deleteResult);
});

//changes accepted to true, after an order has been accepted
adminRouter.patch('/:id', async (request, response) => {
  try {
    const orderId = request.params.id;
    const modifiedResult = await mongoose.models.orders.findOneAndUpdate(
      { _id: orderId },
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