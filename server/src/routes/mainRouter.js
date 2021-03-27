/**
 * The main router.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const authenticate = require('./authenticate.js')
const groupsRouter = require('./groupsRouter.js')
const projectsRouter = require('./projectsRouter.js')
const webhookRouter = require('./webhookRouter.js')
const webhookDataRouter = require('./webhookDataRouter.js')
const logoutRouter = require('./logoutRouter.js')
const databaseRouter = require('./databaseRouter.js')
const slackRouter = require('./slackRouter.js')

router.get('/', (req, res, next) => {
    res.send('entry')
})

// Use router to authenticate user
router.use('/', authenticate)

// Use groups router
router.use('/groups', groupsRouter)

// Use projects router
router.use('/projects', projectsRouter)

// Use GitLab webhook router
router.use('/hook/create', webhookRouter)

// Use GitLab webhook data
router.use('/hook', webhookDataRouter)

// Use logout router
router.use('/logout', logoutRouter)

// Use database router
router.use('/database', databaseRouter)

// Use slack router
router.use('/slack', slackRouter)

// Catch 404
router.use('*', (req, res, next) => next(createError(404)))

// Exports
module.exports = router