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
            return res.status(409).json({ message: "Email already exists!" });
        }

        const { token } = await createUser(email, firstName, lastName, password);
        
        return res.status(201).json({ message: "User is created" });
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

        const token = await authenticate(email, password);

        if (token) {
            return res.status(200).json({ token });
        }
        return res.status(401).json({ message: 'Email or password invalid' });
    }
    catch(error) {
        next(error);
    }
};

module.exports = {
    signUp,
    signIn,
};