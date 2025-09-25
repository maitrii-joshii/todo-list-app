const { AsyncLocalStorage } = require("async_hooks");

const localStorage = new AsyncLocalStorage();

function createRequestContext(user, callback) {
    localStorage.run({ user }, callback);
}

const getUser = () => {
    const store = localStorage.getStore();
    return store ? store.user : null;
}

module.exports = {
    createRequestContext,
    getUser
};