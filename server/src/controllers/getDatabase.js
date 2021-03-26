/**   
* Controller for getting data from database.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const Issue = require('../models/issue.js')

/**
 * Gets database data.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
          // Get all data in database for specific user
          const database = {
            data: (await Issue.find({ token: req.user.token }))
            .map(issue => ({
                project: issue.project,
                title: issue.title,
                action: issue.action,
                description: issue.description
            }))
        }
        if (database.data.length > 0) {
            res.send(database)
        }
    } catch (error) {
        next(error)
    }
}