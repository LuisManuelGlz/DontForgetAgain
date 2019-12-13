const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const helpers = {};

helpers.isAuthenticated = async (req, res, next) => {
    const token = req.headers['x-access-token'].split(' ')[1];

    if (!token) {
        return res.json({ errors: ['No authorized'] });
    }

    try {
        const decoded = await jwt.verify(token, secret);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.json({ errors: ['Failed authentication'] });
    }
};

module.exports = helpers;