const mongoose = require("mongoose");
const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    utilisateur: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateur"
      }],
    ville:String,
    adresse: String,
    category:  [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }],
    Commande:[{
      panier: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Plat"
        }],
      date:Date,
      status:String
    }
    ],
    // validation:Boolean,
  })
);

module.exports = Client;
