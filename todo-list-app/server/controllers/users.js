const { createUser, authenticate, findUser } = require("../services/users");

const signUp = async(req, res, next) => {
    try {
        const {
            email,
            firstName,
            lastName,
            password
        } = req.body;
        const user = await findUser(email);

        if(user) {
            res.status(409).json({ message: "Email already exists!" });
        }

        const { token } = await createUser(email, firstName, lastName, password);
        
        res.status(201).json({ message: "User is created" });
    }
    catch(error) {
        next(error);
    }
};

const signIn = async(req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await findUser(email);

        if(!user) {
            res.status(409).json({ message: "Email doesn't exists!" });
        }

        const { token } = await authenticate(email, password);
        
        res.status(200).json({ token });
    }
    catch(error) {
        next(error);
    }
};

module.exports = {
    signUp,
    signIn,
};