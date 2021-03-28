/**   
* Controller for slack url.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const Url = require('../models/url.js')

const sendNotifications = require('../lib/sendNotifications.js')

// const sendNotifications = require('../lib/sendNotifications.js')
// const Slack = require('../models/slack.js')
/**
 * Posts slack url. 
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        const url = req.headers.url
        const id = req.headers.id
  
        // const event = data.event_type
    
        // if (event === 'issue') {
        //     io.emit('issue', data)
        //   }
        
        // await sendNotifications(data)
        // const slackUrl = new Url({

        // })
        const slackUrl = new Url({
            url: url,
            id: id
        })

        await slackUrl.save()

        await sendNotifications()

        
   res.sendStatus(200)
        
     
    } catch (error) {
        next(error)
    }
}