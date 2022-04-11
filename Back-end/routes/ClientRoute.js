let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const {create,Get} = require("../controllers/ClientController");


router.post('/newClient',create);
router.get('/getClient',Get);

module.exports = router;
