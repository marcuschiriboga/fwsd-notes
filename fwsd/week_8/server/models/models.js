let { Schema, model } = require("mongoose")
const CarSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true,
    minLength: 2
  },
  isConvertible: {
    type: Boolean,
    default: false
  },
  numDoors: {
    type: Number,
    min: 1,
    max: 5
  }
})
const Car = model("Car", CarSchema);
export default Car;