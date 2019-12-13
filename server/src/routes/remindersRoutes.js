const express = require('express');
const router = express.Router();

const reminderController = require('../controllers/reminderController');
const { isAuthenticated } = require('../helpers/auth');

router.get('/api/reminders', isAuthenticated, reminderController.getReminders);

router.post('/api/reminders/add', isAuthenticated, reminderController.addReminder);

router.put('/api/reminders/edit', isAuthenticated, reminderController.editReminder);

router.delete('/api/reminders/delete', isAuthenticated, reminderController.deleteReminder);

module.exports = router;