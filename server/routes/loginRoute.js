// ny express router
import Router from "express"
const loginRouter = Router()

import mongoose, {Schema} from 'mongoose'

loginRouter.post('/', async (request, response)=>{
    let account = await mongoose.models.accounts.findOne({
        email: request.body.email,
        password: request.body.password
    })

    if(account){
        response.status(201)
        request.session.account = account
        response.json({'loggedIn':true})
    }else{
        response.status(401)
        response.json({'loggedIn':false})
    }

})

loginRouter.get('/', async (request, response)=>{

    if(request.session?.account){
        // first, always, check with database
        let account = await mongoose.models.accounts.findOne({
            email: request.session.account.email,
            password: request.session.account.password
        })
        // respond
        if(account){            
            response.json({
                name: request.session.account.name,
                email: request.session.account.email,
                loggedIn: true
            })
            return
        }
    }
    response.json({'loggedIn':false})

})

loginRouter.delete('/', (request, response)=>{

    delete(request.session.account)
    response.json({'loggedIn':false})

})

export default loginRouter
