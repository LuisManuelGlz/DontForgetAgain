const reminder = require('../models/reminder');

const ReminderController = {};

// método para obtener todos los reminders
ReminderController.getReminders = (req, res) => {
    return res.json('Hola');
};

// método para agregar un reminder
ReminderController.addReminder = (req, res) => {
    let { title, reminderDate, reminderTime, repeat } = req.body;
    const messages = [];
    
    title = title.trim();
    repeat = repeat.trim();
    
    // validaciones
    if (!title) {
        messages.push({ text: "Please write a title" });
    } else if (title.length > 250) {
        messages.push({ text: "Your title can only have 250 characters" });
    }

    if (!repeat) {
        messages.push({ text: "Please select the reminder repeat" });
    }

    // si hubo errores manda los errores al front
    if (messages.length > 0) {
        return res.json({ messages });
    }

    console.log(title, reminderDate, repeat);

    return res.json('Reminder added');
};

// método para editar un reminder
ReminderController.editReminder = (req, res) => {
    return res.json('Reminder edited');
};

// método para eliminar un reminder
ReminderController.deleteReminder = (req, res) => {
    return res.json('Reminder deleted');
};

module.exports = ReminderController;