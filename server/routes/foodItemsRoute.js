import Router, { request } from "express"
import {Schema} from "mongoose";
const foodItemsRouter = Router()
import mongoose from "mongoose";

const foodItemsSchema = new Schema({
    name: String,
    price: String,
    info: String,
    category: String,
    picture: String
})

const cartSchema = new Schema({
    items: [{
        itemId: String,
        quantity: Number
    }]
})

mongoose.model('foodItems', foodItemsSchema)

foodItemsRouter.get('/', async (request, response )=>{
    const foodItem = await mongoose.models.foodItems.find()
    response.json(foodItem)
})

//get a specific item
foodItemsRouter.get('/:id', async (request, response )=>{
    const foodItem = await mongoose.models.foodItems.findById(request.params.id)
    response.json(foodItem)
  })

foodItemsRouter.delete('/:id', async (request, response)=> {
    const foodItem = request.params.id
    const deleteResult = await mongoose.models.foodItems.deleteOne({_id: foodItem})

/*     await mongoose.models.foodItems.findByIdAndDelete(request.params.id)
    const result = await mongoose.models.foodItems.findById(request.params.id) */
    response.json({"deleted": (deleteResult===null)})
})

foodItemsRouter.post('/', async (request, response)=>{
    const foodItem = new mongoose.models.foodItems()
    foodItem.name = request.body.name
    foodItem.price = request.body.price
    foodItem.info = request.body.info
    foodItem.category = request.body.category
    foodItem.picture = request.body.picture
    await foodItem.save()
    response.json({"result": "created"})
})

foodItemsRouter.put('/:id', async (request, response)=>{
    const foodItem = await mongoose.models.foodItems.findByIdAndUpdate(request.params.id, request.body)
    response.json(foodItem)
})

export default foodItemsRouter