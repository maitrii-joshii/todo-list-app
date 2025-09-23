const { User } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const authenticate = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(isPasswordValid) {
            const token = jwt.sign({ id: user.id }, JWT_SECRET, {
                expiresIn: 60 * 60, 
            });
            return token;
        }
    }
    return null;
    
};

const createUser = async(email, firstName, lastName, password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ email: email, firstName: firstName, lastName: lastName, password: hashedPassword });
    
    return user;
};

const findUser = async(email) => {
    const user = await User.findOne({ where: { email: email } });
    return user;
};

const findUserById = async(userId) => {
    const user = await User.findByPk(userId);
    return user;
};

module.exports = {
    createUser, 
    authenticate,
    findUser,
    findUserById,
};




