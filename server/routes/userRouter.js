const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authModdleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth',authModdleware , userController.check)


module.exports = router