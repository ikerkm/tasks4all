const mongoose = require('mongoose');

const {
    port,
    DB,
    host
} = process.env.MongoDB;

//ojo con las comas abiertas para solicitar datos con $
mongoose.connect(`mongodb://${host}:${port}/${DB}`, {
    useNewUrlParser: true
});

module.exports = mongoose;