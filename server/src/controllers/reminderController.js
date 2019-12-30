const Reminder = require('../models/reminder');

const ReminderController = {};

// método para obtener todos los reminders
ReminderController.getReminders = (req, res) => {
    Reminder.find({ userId: req.userId }, '-userId -creationDate').sort({ creationDate: 'asc' })
    .then((reminders) => {
        return res.status(200).json(reminders);
    })
    .catch((err) => {
        console.log(err);
        return res.json(err);
    });
};

// método para agregar un reminder
ReminderController.addReminder = (req, res) => {
    let { start, end, title, color } = req.body;
    const errors = [];
    
    title = title.trim();
    
    // validaciones
    if (!title) {
        errors.push({ text: "Please write a title" });
    } else if (title.length > 250) {
        errors.push({ text: "Your title can only have 250 characters" });
    }

    // si hubo errores manda los errores al front
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const newReminder = new Reminder({ start, end, title, color, userId: req.userId });
    newReminder.save()
    .then(() => {
        return res.status(201).json('Reminder added');
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
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