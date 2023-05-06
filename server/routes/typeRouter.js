const Router = require('express')
const router = new Router()

router.post('/registration',)
router.post('/login',)
router.get('/auth', (req, res) => {
    res.jso ({message: 'routes working...'})
})


module.exports = router