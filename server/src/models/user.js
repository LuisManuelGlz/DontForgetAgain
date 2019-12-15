const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// modelo User
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

// método del modelo que encripta la contraseña
UserSchema.methods.encryptPassword = async (password) => {
    const salt = bcrypt.genSaltSync(8); // generamos sal
    const hash = bcrypt.hashSync(password, salt); // asignamos la sal y creamos hash

    return hash
};

// método del modelo que valida que la contraseña sea correcta
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = model('User', UserSchema);