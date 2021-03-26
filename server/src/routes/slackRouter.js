/**
 * The slack router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const postSlackUrl = require('../controllers/postSlackUrl.js')

 // Post slack url
 router.post('/', postSlackUrl)

 // Exports
 module.exports = router