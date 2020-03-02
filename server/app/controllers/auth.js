const { body, validationResult } = require('express-validator')
var User = require('../models/user');

/* GET actorController. */
let controller = {
    login: async(req, res) => {
        try {
            const errors = validationResult(req); 
            // Finds the validation errors in this request and wraps them in an object with handy functions
            if (!errors.isEmpty()) {
                res.status(422).json({ errors: errors.array() });
                return;
            }

            const { email, password } = req.body
            const user = await User.findByCredentials(email, password)
            
            if (!user) {
                return res.status(401).send({error: 'Login failed! Check authentication credentials'})
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            let errord = "Invalid login credentials"
            res.status(400).send({errors:errord})
        }
    },
    register:async(req, res) =>{
        try {
            const errors = validationResult(req); 
            // Finds the validation errors in this request and wraps them in an object with handy functions
            if (!errors.isEmpty()) {
                // console.log('error')
                res.status(422).json({ errors: errors.array() });
                return;
            }

            const {name, email, password} = req.body
            
            User.findOne({email:email}).exec(async(err, docs)=>{
                // console.log(err,docs)
                if(docs===null){
                    const user = new User(req.body)
                    await user.save()
                    const token = await user.generateAuthToken()
                    res.status(201).send({ user, token })
                }else{
                    res.status(422).send('User already Exists login')
                }
            })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    me:async(req,res)=>{
        res.send(req.user)
    },
    logout:async(req,res)=>{
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token != req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    },
    logoutall:async(req,res)=>{
        try {
            req.user.tokens.splice(0, req.user.tokens.length)
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
module.exports = controller