import Router from "express"
const createAccountRouter = Router()

import mongoose, {Schema} from 'mongoose'

const createAccountSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: {type:Boolean, default:false}
})

mongoose.model('createAccounts', createAccountSchema)

// createAccountRouter.get('/', async (request, response)=>{
//     const createAccount = await mongoose.models.createAccount.find()
//     response.json(createAccount)
// })

createAccountRouter.post('/', async (request, response)=>{
    const createAccount = new mongoose.models.createAccounts()
    createAccount.name = request.body.name
    createAccount.email = request.body.email
    createAccount.password = request.body.password
    await createAccount.save()
    response.json({"result": "created"})
})

export default createAccountRouter