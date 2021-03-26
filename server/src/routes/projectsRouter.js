/**
 * The projects router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const isLoggedIn = require('../middlewares/isLoggedIn.js')
 const getProjects = require('../controllers/getProjects.js')

 // Get projects if user is logged in
 router.get('/', isLoggedIn, getProjects)

 // Exports
 module.exports = router