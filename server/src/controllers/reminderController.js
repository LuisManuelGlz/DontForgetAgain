const reminder = require('../models/reminder');

const ReminderController = {};

ReminderController.getReminders = (req, res) => {
    return res.json('Hola');
};

ReminderController.addReminder = (req, res) => {
    res.json('Reminder added');
};

ReminderController.editReminder = (req, res) => {
    res.json('Reminder edited');
};

ReminderController.deleteReminder = (req, res) => {
    res.json('Reminder deleted');
};

module.exports = ReminderController;