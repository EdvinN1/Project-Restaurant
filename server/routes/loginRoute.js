// ny express router
import Router from "express"
const loginRouter = Router()

import mongoose, {Schema} from 'mongoose'

import crypto from 'crypto'
const salt = "paraplane".toString('hex')

function getHash(password){ // utility
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return hash
}

loginRouter.post('/', async (request, response)=>{
    let account = await mongoose.models.accounts.findOne({
        email: request.body.email,
        password: getHash(request.body.password) // encrypt the entered password
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
            password: getHash(request.session.account.password)
        })
        // respond
        if(account){            
            response.json({
                name: request.session.account.name,
                email: request.session.account.password,
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
