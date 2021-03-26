/**   
* Controller for hook data.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const sendNotifications = require('../lib/sendNotifications.js')
const Issue = require('../models/issue.js')
/**
 * Posts webhook data. 
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        const io = req.app.get('socketio')
        const data = await req.body
        const event = data.event_type
    
        if (event === 'issue') {
            io.emit('issue', data)
          }
        
        await sendNotifications(data)
   
        const newIssue = new Issue({
            token: req.headers['x-gitlab-token'],
            project: data.project.name,
            title: data.object_attributes.title,
            action: data.object_attributes.action,
            description: data.object_attributes.description
        })

        await newIssue.save()
    
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}