const mongoose = require("mongoose");

const Livreur = mongoose.model(
  "Livreur",
  new mongoose.Schema({
    utilisateur: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Utilisateur"
    }],
    Commande:[{
      panier: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Plat"
        }],
      utilisateur: [],
      date:Date,
      status:String
    },
  ],
  disponibliter:Boolean
  },
)
);

module.exports = Livreur;
