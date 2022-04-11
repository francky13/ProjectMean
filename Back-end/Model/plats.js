const mongoose = require("mongoose");

const Plat = mongoose.model(
  "Plat",
  new mongoose.Schema({
    name: String,
    photo: String,
    prix: Number,
    prixRevient:Number,
    hidden:Boolean,
  })
);

module.exports = Plat;
