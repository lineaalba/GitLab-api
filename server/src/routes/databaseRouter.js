/**
 * The database router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const getDatabase = require('../controllers/getDatabase.js')

 // Get data in database
 router.get('/', getDatabase)

 // Exports
 module.exports = router