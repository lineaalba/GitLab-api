/**
 * The slack router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const createSlackUrl = require('../controllers/createSlackUrl.js')

 // Post slack url
 router.post('/', createSlackUrl)

 // Exports
 module.exports = router