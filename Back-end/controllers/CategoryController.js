const Categorie = require('../Model/category');

exports.create = (req,res) =>{
  Categorie.create(req.body)
  .then((resultat) => {
    return res.status(201).json({resultat});
})
.catch((error) => {
    return res.status(400).json({error})
});
}
