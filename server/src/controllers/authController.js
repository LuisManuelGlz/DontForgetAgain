const AuthController = {};

AuthController.register = (req, res) => {
    res.json({ "auth": "register" });
};

AuthController.login = (req, res) => {
    res.json({ "auth": "login" });
};

module.exports = AuthController;