const mongoose = require("mongoose");
const Restaurant = mongoose.model(
  "Restaurant",
  new mongoose.Schema({
    utilisateur: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Utilisateur"
      }],
    ville:String,
    nomRestaurant:String,
    adresse: String,
    category:  [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }],
    platjournalier: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plat"
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
    }
    ],
    validation:Boolean,
  })
);

module.exports = Restaurant;
