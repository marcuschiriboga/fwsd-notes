var express = require('express');
var router = express.Router();
import Car from "../models/models"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', default_view: true });
});

router.get('/cars', async (req,res,next)=>{
  try {
    const allCars = await Car.find();
    console.log(allCars)
    res.json(allCars);
  } catch (error) {
    res.status(500).json(error.errors);
  }
}
)


const createCarHandler = async (req, res) => {
  try { 
    const { make, model, isConvertible, numDoors } = req.body;

    // const newCar = await Car.create({ make, model, isConvertible, numDoors })
    const newCar = await Car.create({ make, model, isConvertible, numDoors, })

    res.json(newCar)
  } catch (error) {
    console.log(error)
    res.status(422).json(error.errors);
  }
}
router.post('/cars', createCarHandler)



const getAllCarsHandler = async (req, res) => {
  try {
    console.log(req)
    const allCars = await Car.find();
    res.json(allCars);
  } catch (error) {
    res.status(500).json(error.errors);
  }
}
module.exports = router;
