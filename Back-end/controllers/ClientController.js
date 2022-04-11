const Client = require('../Model/Client');
const Utilisateur = require('../Model/Utilisateur');
const category = require('../Model/category');
const plat = require('../Model/plats');
const { now } = require('mongoose');



exports.create= (req,res) =>{
   CreateUtilisateur(req.body)
    .then((Utilisateur) => {
       createClient(req.body,Utilisateur._id)
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

exports.Commande= (req,res) =>{
  createCommande(req.body.idclient,req.body.IdPlat)
   .then((resultat) => {
      return res.status(201).json({resultat});
   })
   .catch((error) => {
       return res.status(400).json({error})
   });
}

async function CreateUtilisateur(UtilisateurParams){
  const util = new Utilisateur({
    nom: UtilisateurParams.nom,
    prenom:UtilisateurParams.prenom,
    MotDePasse:UtilisateurParams.MotDePasse,
    });
    util.save()
    return util;
};

async function createClient(ClientParams,UtlisateurID){
  console.log(ClientParams);
   const client = new Client({
    utilisateur :UtlisateurID,
    ville: ClientParams.ville,
    adresse:ClientParams.adresse,
    category: ClientParams.idCategorie,
    Commande:[],
    validation:false
    });
    client.save()
    return client;
};

const createCommande = function(idclient, IdPlat) {
    return client.findByIdAndUpdate(
      idclient,
      { $push: {
        Commande: [{
          $push:{panier:IdPlat} }
        ],
        date:Date.now(),
        status:1

      } },
      { new: true, useFindAndModify: false }
    );
};

exports.Get= (req,res) =>{
  Client.find()
  .populate('utilisateur')
  .populate('category')
  .then((resultat) => {
      return res.status(200).json({resultat});
  })
  .catch((error) => {
      return res.status(400).json({error})
  });
}
