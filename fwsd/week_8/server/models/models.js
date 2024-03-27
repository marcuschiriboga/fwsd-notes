let { Schema, model } = require("mongoose")
const CarSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true,
    minLength: 2,
    asefklhasldkf,
    asdflnsdaf,
    asdlkfnasdl,
    asdflkjads,

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
// const Owner = model("Owner", OwnerSchema)
const addPlateField = (schema) => {
  return schema.clone({ plate: {type: String, required: false}})
  };
  const addMakerField = (schema) => {
    return schema.clone({ maker: {type: Mongoose.Schema.Types.ObjectId, ref: Maker}})
    };
  
  const newSchema = addPlateField(CarSchema)

export default {Car, newSchema};

"adding a new field" "schema reducer" "adding a owner or licence plate field to the model"
"create a new relationship" "car-owner, car-driver, car-passenger, car-mechanic, car-manufacturer" "" 
Car.findById("pretendID4").populate('owner').populate("maker")  "Car._id" "mongodb automatically adds a ._id"
"nest documents" 