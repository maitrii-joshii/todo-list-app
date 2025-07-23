const { User } = require('../models');

const createUser = async(email, firstName, lastName, password) => {
    const user = await User.create({ email: email, firstName: firstName, lastName: lastName, password: password });
    return user;
};


module.exports = {createUser};