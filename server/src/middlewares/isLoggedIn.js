/**   
* Middleware helper to determine if a user is logged in.
*
* @autor Filippa Jakobsson
* @version 1.0.0
*/

/**
 * Determines if a user is logged in or not.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
module.exports = async (req, res, next) => {
    try {
        if (req.user) {
            if (req.user.token) {
                next()
            } else {
                res.send('Access denied')
                // res.status(401).json('Access denied')
            }
        }
    } catch (error) {
        next(error)
    }
}
