/**
 * The logout router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const logout = require('../controllers/logout.js')

 // Get logout controller
 router.get('/', logout)

 // Exports
 module.exports = router