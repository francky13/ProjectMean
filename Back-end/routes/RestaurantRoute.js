let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const {create,CreateNewPlat,Get} = require("../controllers/RestaurantController");


router.post('/newRestaurantt',create);
router.post('/CreateNewPlat',CreateNewPlat);
router.get('/GetRestaurant',Get);


module.exports = router;
