/**
 * The webhook router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const isLoggedIn = require('../middlewares/isLoggedIn.js')
 const createHook = require('../controllers/createHook.js')

 // Create a webhook
 router.post('/', isLoggedIn, createHook) 

 // Exports
 module.exports = router