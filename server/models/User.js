const mongoose = require('mongoose');
const {
    pick
} = require('lodash');
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: true,


    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
}, {
    strict: true


})


UserSchema.methods.toJSON = function () {
    const user = this;
    return pick(user, ['_id', 'name', 'email']);

}
UserSchema.statics.findByCredentials = ({
    email,
    password
}) => {
    console.log(email, password);
    User.findOne({
        email,
        password
    });

}
const User = mongoose.model('user', UserSchema);
module.exports = User;