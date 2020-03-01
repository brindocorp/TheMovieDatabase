/* GET actorController. */
const { body, validationResult } = require('express-validator')

const controller = {
    index: (req, res, next) => {
        res.json({"message":"Ok"})
    }
}
module.exports = controller;