const mongoose = require('mongoose');

const Utilisateur=mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports= mongoose.model('Utilisateur',Utilisateur);