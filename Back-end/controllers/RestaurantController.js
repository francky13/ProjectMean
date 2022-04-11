
const Utilisateur = require('../Model/Utilisateur');
const Restaurant = require('../Model/Restaurants');

const category = require('../Model/category');
const plat = require('../Model/plats');
const { now } = require('mongoose');



exports.create= (req,res) =>{
  CreateUtilisateur(req.body)
    .then((Utilisateur) => {
      createRestaurant(req.body,Utilisateur._id)
      .then((resultat) => {
        return res.status(201).json({resultat});
      })
        .catch((errorg) => {
          return res.status(400).json({errorg})
      });
    })
    .catch((error) => {
        return res.status(400).json({error})
    });
}

exports.CreateNewPlat= (req,res) =>{
  CreatePlatModel(req.body)
   .then((Plat) => {
     console.log(Plat);
    createPlat(req.body.idRestaurant,Plat._id)
    .then((resultat) => {
      return res.status(201).json({resultat});
    })
      .catch((errorg) => {
        return res.status(400).json({errorg})
    });
   })
   .catch((error) => {
       return res.status(400).json({error})
   });
}


const createPlat = function(idRestaurant, IdPlat) {
    return Restaurant.findByIdAndUpdate(
      idRestaurant,
      { $push: { platjournalier: IdPlat} },
      { new: true, useFindAndModify: false }
    );
};

async function createRestaurant(RestaurantParams,UtlisateurID){
  const restaurant = new Restaurant({
   utilisateur :UtlisateurID,
   ville: RestaurantParams.ville,
   nomRestaurant:RestaurantParams.NomRestaurant,
   adresse:RestaurantParams.adresse,
   category: RestaurantParams.idCategorie,
   platjournalier:[],
   Commande:[],
   validation:false,
   });

   restaurant.save()
   return restaurant;
};

async function CreateUtilisateur(UtilisateurParams){
  const util = new Utilisateur({
    nom: UtilisateurParams.nom,
    prenom:UtilisateurParams.prenom,
    MotDePasse:UtilisateurParams.MotDePasse,
    });
    util.save()
    return util;
};

async function CreatePlatModel(platParam){
  const plat2 = new plat({
    name: platParam.name,
    photo:platParam.photo,
    prix:platParam.prix,
    prixRevient:platParam.prixRevient,
    hidden:true,
    });
    plat2.save()
    return plat2;
};

exports.Get= (req,res) =>{
  Restaurant.find()
  .populate('utilisateur')
  .populate('category')
  .populate('platjournalier')

  .then((resultat) => {
      return res.status(200).json({resultat});
  })
  .catch((error) => {
      return res.status(400).json({error})
  });
}
