/**
 * The starting point.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

const express = require('express')
const helmet = require('helmet')
const mongoose = require('./config/mongoose')
const cors = require('cors')
const router = require('./routes/mainRouter.js')
const http = require('http')
const session = require('express-session')

// Connect to the database
mongoose.connect().catch(error => {
    console.error(error)
    process.exit(1)
})

// require('dotenv').config()

const port = process.env.PORT || 8080

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

const server = http.createServer(app)

app.use(helmet())
// Parse requests of the content type application/json
app.use(express.json())
app.use(session({
    secret: 'secret',
    // resave: false,
    // saveUninitialized: false,
    // cookie: {
    //   httpOnly: true,
    //   maxAge: 1000 * 60 * 60 * 24, // 1 day
    //   sameSite: 'lax'
    // }
  }))

// Routes
app.use('/', router)

const io = require('socket.io')(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
})

io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})
app.set('socketio', io)

// Error handler
app.use(function (err, req, res, next) {
    err.status = err.status || 500

    if (req.app.get('env') !== 'development') {
        res
        .status(err.status)
        .json({
            status: err.status,
            message: err.message
        })
        return
    }

    // Development only!
    // Only providing detailed error in development.
    return res
    .status(err.status)
    .json({
        status: err.status,
        message: err.message,
        innerException: err.innerException,
        stack: err.stack
    })
})

server.listen(port, () => {
  console.log('Server is running on port ' + port)
})
