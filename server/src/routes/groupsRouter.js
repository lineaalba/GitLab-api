/**
 * The groups router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/isLoggedIn.js')
const getGroups = require('../controllers/getGroups.js')

// Get groups if user is logged in
router.get('/',  getGroups)

// Exports
module.exports = router