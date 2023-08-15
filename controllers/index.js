const router = require('express').Router()
const movieRoutes = require('./movieControllers') 
router.use('/', movieRoutes )
module.exports = router