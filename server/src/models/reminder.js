const { model, Schema } = require('mongoose');

// modelo Reminder
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
    reminderTime: {
        type: String,
        required: true
    },
    repeat: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Reminder', ReminderSchema);