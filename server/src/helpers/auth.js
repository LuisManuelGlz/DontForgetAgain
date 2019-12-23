const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const helpers = {};

// método para autenticar usuario
helpers.isAuthenticated = async (req, res, next) => {
    // obtenemos el token
    let token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({ errors: [{ text: 'No authorized' }] });
    }

    // decodificamos
    try {
        token = token.split(' ')[1];
        const decoded = await jwt.verify(token, secret);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(500).json({ errors: [{ text: 'Failed authentication' }] });
    }
};

module.exports = helpers;