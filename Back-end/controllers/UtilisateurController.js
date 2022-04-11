const Utilisateur = require('../Model/Utilisateur');
//create
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
// GEt
exports.Get= (req,res) =>{
    Utilisateur.find()
    .then((resultat) => {
        return res.status(200).json({resultat});
    })
    .catch((error) => {
        return res.status(400).json({error})
    });
}
//
exports.Update= (req,res) =>{
  if(!req.body){
    return res.status(400).send({message : "Data is null"})
  }

  const id= req.params.id;
  Utilisateur.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then((resultat) => {
    return res.status(201).json({resultat});
})
  .catch((error) => {
    return res.status(400).json({error})
});
}

exports.Delete= (req,res) =>{

  const id= req.params.id;
  Utilisateur.findByIdAndDelete(id,req.body)
  .then((resultat) => {
    return res.status(201).json({resultat});
})
  .catch((error) => {
    return res.status(400).json({error})
});
}
