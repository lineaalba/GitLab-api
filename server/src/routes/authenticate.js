/**
 * The OAuth router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()
const GitLabStrategy = require('passport-gitlab2')
const passport = require('passport')
// require('dotenv').config()

router.use(passport.initialize())
router.use(passport.session())

// Strategy config
passport.use(new GitLabStrategy({
    authorizationURL: 'https://Gitlab.com/oauth/authorize',
    tokenURL: 'https://Gitlab.com/oauth/token',
    scope: 'api',
    clientID: process.env.GITLAB_APP_ID,
    clientSecret: process.env.GITLAB_APP_SECRET,
    callbackURL: 'https://protected-depths-73018.herokuapp.com/auth/gitlab/callback'
}, (accessToken, refreshToken, profile, cb) => {
    profile.token = accessToken
   
    return cb(null, profile)
  }
))

passport.serializeUser((user, cb) => {
    cb(null, user)
})
  
passport.deserializeUser((user, cb) => {
    cb(null, user)
})

router.get('/auth/gitlab', passport.authenticate('gitlab'))

router.get('/auth/gitlab/callback', passport.authenticate('gitlab', {
    failureRedirect: '/'
}), (req, res) => {
    req.body.isLoggedIn = true
    // req.user.session = req.user 
    res.redirect(process.env.CLIENT_URL)
})

// Exports
module.exports = router