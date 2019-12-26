const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// métodos
router.post('/api/auth/register', authController.register);
router.post('/api/auth/login', authController.login);
// router.get('/test', (req, res) => {
//   const hola= [{
//     hola: 'adios'
//   }];
//   res.send(hola);
// });

module.exports = router;