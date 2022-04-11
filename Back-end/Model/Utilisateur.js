const mongoose = require('mongoose');

const Utilisateur=mongoose.Schema({
    nom: {
        type: String,
        require: true
    },
    prenom:String,
    MotDePasse:String,

});

module.exports= mongoose.model('Utilisateur',Utilisateur);
