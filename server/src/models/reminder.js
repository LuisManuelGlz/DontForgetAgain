const { model, Schema } = require('mongoose');

const ReminderSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 250
    },
    reminderDate: {
        type: Date,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Reminder', ReminderSchema);