/**   
* Controller for saving Slack webhook url.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const Url = require('../models/url.js')

/**
 * Saves Slack webhook
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        const url = req.body.url
        const id = req.body.id
  
        // Save slack webhook url to database
        const slackUrl = new Url({
            url: url,
            id: id
        })

        await slackUrl.save()
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}