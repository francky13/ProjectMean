let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const {create} = require("../controllers/CategoryController");


router.post('/newCategory',create);
module.exports = router;
