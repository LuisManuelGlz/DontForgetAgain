const { model, Schema } = require('mongoose');

// modelo Reminder
const ReminderSchema = new Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date
    },
    title: {
        type: String,
        required: true,
        max: 250
    },
    color: {
        primary: {
            type: String,
            required: true
        }
    },
    resizable: {
        beforeStart: {
            type: Boolean
        },
        afterEnd: {
            type: Boolean
        }
    },
    draggable: {
        type: Boolean
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