const userService = require("../services/users");

const signUp = async(req, res, next) => {
    try {
        const {
            email,
            firstName,
            lastName,
            password
        } = req.body;
        res.status(201).json({ data: await userService.createUser(email, firstName, lastName, password) });
    }
    catch(error) {
        next(error);
    }
};

module.exports = {
    signUp,
};