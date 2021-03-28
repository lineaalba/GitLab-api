/**   
* Controller for slack url.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const Url = require('../models/url.js')

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
        const header = await req.header.url
  
        // const event = data.event_type
    
        // if (event === 'issue') {
        //     io.emit('issue', data)
        //   }
        
        // await sendNotifications(data)
        // const slackUrl = new Url({

        // })
        const slackUrl = new Url({
            url: header
        })

        await slackUrl.save()

     
   res.sendStatus(200)

     
    } catch (error) {
        next(error)
    }
}