import Router from "express"
const createAccountRouter = Router()

import mongoose, {Schema} from 'mongoose'

import crypto from 'crypto'
const salt = "paraplane".toString('hex')

function getHash(password){ // utility
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return hash
}

const createAccountSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: {type:Boolean, default:false}
})

mongoose.model('createAccounts', createAccountSchema)

//get accounts
createAccountRouter.get('/', async (request, response)=>{
    const createAccount = await mongoose.models.createAccounts.find()
    response.json(createAccount)
})

//delete accounts
createAccountRouter.delete('/:id', async (request, response)=>{
    await mongoose.models.createAccounts.findByIdAndDelete(request.params.id)
    const result = await mongoose.models.createAccounts.findById(request.params.id)
    response.json({"deleted": (result===null)})
})

//create accounts
createAccountRouter.post('/', async (request, response)=>{
    const createAccount = new mongoose.models.createAccounts()
    createAccount.name = request.body.name
    createAccount.email = request.body.email
    createAccount.password = getHash(request.body.password)
    await createAccount.save()
    response.json({"result": "created"})
})

export default createAccountRouter