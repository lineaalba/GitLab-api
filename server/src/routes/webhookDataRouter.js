/**
 * The webhook data router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const postHookData = require('../controllers/postHookData.js')

// Post webhook data (issues)
router.post('/', postHookData)
 
// Exports
module.exports = router