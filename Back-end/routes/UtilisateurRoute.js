let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const {create, Get,Update,Delete} = require("../controllers/UtilisateurController");


router.post('/newUtilisateur',create);
router.get("/getUtilisateur", Get);
router.post("/updateUtilisateur/:id", Update);
router.post("/DeleteUtilisateur/:id", Delete);







module.exports = router;
