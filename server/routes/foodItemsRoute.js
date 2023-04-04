import Router from "express"
import {Schema} from "mongoose";
const foodItemsRouter = Router()
import mongoose from "mongoose";

const foodItemsSchema = new Schema({
    name: String,
    price: String,
    info: String,
    category: String
})

mongoose.model('foodItems', foodItemsSchema)

foodItemsRouter.get('/', async (request, response )=>{
    const foodItem = await mongoose.models.foodItems.find()
    response.json(foodItem)
})