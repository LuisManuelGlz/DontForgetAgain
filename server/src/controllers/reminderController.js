const Reminder = require('../models/reminder');

const ReminderController = {};

// método para obtener todos los reminders
ReminderController.getReminders = (req, res) => {
    Reminder.find({ userId: req.userId }).sort({ reminderDate: 'asc' })
    .then((reminders) => {
        return res.json(reminders);
    })
    .catch((err) => {
        console.log(err);
        return res.json(err);
    });
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

    if (!reminderDate || !/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(reminderDate)) {
        messages.push({ text: "Please set a valid date" });
    }

    if (!reminderTime || !/^(((1[0-2])|([1-9])):[0-5][0-9]\s(AM|PM)|((([0-1][0-9])|(2[0-3])):[5-9][0-9]))$/.test(reminderTime)) {
        messages.push({ text: "Please set a valid time" });
    }

    if (!repeat) {
        messages.push({ text: "Please select the reminder repeat" });
    }

    // si hubo errores manda los errores al front
    if (messages.length > 0) {
        return res.json({ messages });
    }

    const newReminder = new Reminder({ title, reminderDate, reminderTime, repeat, userId: req.userId });
    console.log(newReminder);
    newReminder.save()
    .then(() => {
        return res.json('Reminder added');
    })
    .catch((err) => {
        console.log(err);
        return res.json(err);
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