let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const {create, Get} = require("../controllers/UtilisateurController");


router.post('/newUtilisateur',create);
router.get("/getUtilisateur", Get);



module.exports = router;