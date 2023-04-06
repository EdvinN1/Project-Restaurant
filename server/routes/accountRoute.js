import Router from "express"
const accountRouter = Router()

import mongoose, {Schema} from 'mongoose'

import crypto from 'crypto'
const salt = "paraplane".toString('hex')

import cors from "cors";
accountRouter.use(cors());

function getHash(password){ // utility
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return hash
}

const accountSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: {type:Boolean, default:false}
})

mongoose.model('accounts', accountSchema)

//get accounts
accountRouter.get('/', async (request, response)=>{
    const account = await mongoose.models.accounts.find()
    response.json(account)
})

//delete accounts
accountRouter.delete('/:id', async (request, response)=>{
    await mongoose.models.accounts.findByIdAndDelete(request.params.id)
    const result = await mongoose.models.accounts.findById(request.params.id)
    response.json({"deleted": (result===null)})
})

accountRouter.delete('/', async (request, response) => {
    const accountToDelete = request.body;
    const deleteResult  = await mongoose.models.accounts.deleteOne({_id: accountToDelete._id });
    response.json(deleteResult);
})

//create accounts
accountRouter.post('/', async (request, response)=>{
    const account = new mongoose.models.accounts()
    account.name = request.body.name
    account.email = request.body.email
    account.password = getHash(request.body.password)
    await account.save()
    response.json({"result": "created"})
})

export default accountRouter