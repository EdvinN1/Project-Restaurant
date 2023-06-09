import Router from "express"
const accountRouter = Router()

import mongoose, {Schema} from 'mongoose'

import crypto from 'crypto'
const salt = "paraplane".toString('hex')

function getHash(password){ // utility
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return hash
}

const accountSchema = new Schema({
    name: {type: String, unique: true},
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

accountRouter.get('/:name', async (request, response) => {
    try {
      const account = await mongoose.models.accounts.findOne({ name: request.params.name });
      if (!account) {
        return response.status(404).json({ message: 'Account not found' });
      }
      const { email } = account;
      response.json({ email });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Server Error' });
    }
  });

//delete account
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

//patch, toggle admin rights
accountRouter.patch('/', async (request, response) => {
    const accountToModify = request.body;
    let adminToggle = request.body.admin;
    adminToggle = !adminToggle;
    const modifiedResult = await mongoose.models.accounts.findOneAndUpdate(
        {_id: accountToModify._id},
        { admin: adminToggle },
        { new: true }
        );
    response.json(modifiedResult);
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