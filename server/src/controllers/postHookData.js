// /**   
// * Controller for hook data.
// *
// * @autor Filippa Jakobsson
// * @version 1.0.0
// */

// const sendNotifications = require('../lib/sendNotifications.js')
// const Issue = require('../models/issue.js')
// const Url = require('../models/url')
// /**
//  * Posts webhook data. 
//  *
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @param {Function} next - Express next middleware function.
//  */
// module.exports = async (req, res, next) => {  
//     try {
//         const io = req.app.get('socketio')
//         const data = await req.body
//         const event = data.event_type
//         const projectId = data.project.id

//         if (event === 'issue') {
//             io.emit('issue', data)
//           }

//         const urlHooks = await Url.find({})

//         for (let i = 0; i < urlHooks.length; i++) {
//             if(urlHooks[i].id === projectId) {
//                 await sendNotifications(data, urlHooks[i].url)
//             }
//         }
//         // urlHooks.forEach(async (element) => { 
//         //     if (element.id === projectId) {
//         //         await sendNotifications(data, element.url)
//         //     }
//         // })
        
//         // await sendNotifications(data)
   
//         const newIssue = new Issue({
//             token: req.headers['x-gitlab-token'],
//             project: data.project.name,
//             title: data.object_attributes.title,
//             action: data.object_attributes.action,
//             description: data.object_attributes.description
//         })

//         await newIssue.save()
    
//         res.sendStatus(200)
//     } catch (error) {
//         next(error)
//     }
// }

/**   
* Controller for hook data.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const sendNotifications = require('../lib/sendNotifications.js')
const Issue = require('../models/issue.js')
const Url = require('../models/url')
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
        const projectId = data.project.id

        if (event === 'issue') {
            io.emit('issue', data)
          }
        
        // Find Slack hook urls and see if it's the same as project id. If it is, send notifications
        const urlHooks = await Url.find({})
        
        urlHooks.forEach(async element => {
            if (element.id.includes(projectId)) {
                await sendNotifications(data, element.url)
            }
        })
   
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