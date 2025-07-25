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
            throw new Error("Email already exists!");
        }

        const { token } = await createUser(email, firstName, lastName, password);
        
        res.status(201).json({ message: "User is created" });
    }
    catch(error) {
        res.status(409);
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
            throw new Error("Email doesn't exists!");
        }

        const { token } = await authenticate(email, password);
        
        res.status(200).json({ token });
    }
    catch(error) {
        next(error);
        res.status(422);
    }
};

module.exports = {
    signUp,
    signIn,
};