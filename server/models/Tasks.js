const mongoose = require('mongoose');
const {
    pick
} = require('lodash');
const TaskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,


    },
    objective: {
        type: String,
        required: true,


    },
    date_limit: {
        type: String,
        required: true,


    },
    estimated_time: {
        type: String,

        required: true,
    },
}, {
    strict: true


})


const Tasks = mongoose.model('Tasks', TaskSchema);
module.exports = Tasks;