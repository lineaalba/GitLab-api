/**   
* Controller for logging out a user.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

const Issue = require('../models/issue.js')

/**
 * Logs out a user.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {  
    try {
        const issues = await Issue.find({})

        issues.map(async issue => {
            if (issue.token === req.user.token) {
                Issue.findOneAndDelete({ token: issue.token }, function (err) {
                    if(err) console.log(err)
                    console.log('Issues deleted successfully')
                })
            }
        })
    
        req.logout()
        res.redirect(process.env.CLIENT_URL)

    } catch (error) {
        next(error)
    }
}