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
const cors = require('cors')

router.use(cors({origin: process.env.CLIENT_URL,
    credentials: true
}))

// Get groups if user is logged in
router.get('/', isLoggedIn, getGroups)

// Exports
module.exports = router