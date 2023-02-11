const mongoose = require('mongoose');
const url = 'mongodb://localhost:8000/usersApp';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log('BD conectada');
});