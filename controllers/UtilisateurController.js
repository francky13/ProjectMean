const Utilisateur = require('../Model/Utilisateur');
exports.create= (req,res) =>{
    const util = new Utilisateur({
        name: req.body.name
    });
    util.save()
    .then((resultat) => {
        return res.status(201).json({resultat});
    })
    .catch((error) => {
        return res.status(400).json({error})
    });
}
exports.Get= (req,res) =>{
    Utilisateur.find()
    .then((resultat) => {
        return res.status(200).json({resultat});
    })
    .catch((error) => {
        return res.status(400).json({error})
    });
}