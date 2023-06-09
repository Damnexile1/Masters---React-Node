const {User, Basket} = require('../models/models') 
const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
         process.env.SECRET_KEY,
         {expiresIn: '24h'}
         )
}

class UserController {
    async registration(req, res, next){
        const {email, password, role} = req.body
        if(!email && !password){
            return next(ApiError.badRequest('Incorrect Email or Password'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest('User with this email exists'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        // return res.json(typeof(hashPassword))
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.badRequest('User with this email is not found'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('password is incorrect'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async check(req, res, next){
        // const {id} = req.query  
        // if(!id){
        //     return next(ApiError.badRequest('Не задан ID'))
        // }
        // res.json(id)

        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        
        return res.json({token})
    }
}

module.exports = new UserController()