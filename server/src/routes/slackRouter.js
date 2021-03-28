/**
 * The slack router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 const express = require('express')
 const router = express.Router()
 const postSlackUrl = require('../controllers/postSlackUrl.js')
 const cors = require('cors')

 router.use(cors({origin: 'https://nifty-yalow-9797ba.netlify.app/dashboard',
    credentials: true
}))
 // Post slack url
 router.post('/', postSlackUrl)

 // Exports
 module.exports = router