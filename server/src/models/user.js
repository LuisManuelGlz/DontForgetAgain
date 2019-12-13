const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.encryptPassword = async (password) => {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    return hash
};

UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = model('User', UserSchema);