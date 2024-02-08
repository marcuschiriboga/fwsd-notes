export const bandMembers = [
    {
      firstName: "Nicko",
      lastName: "McBrain",
      instrument: "Drums",
      age: 70,
    },
    {
      firstName: "Bruce",
      lastName: "Dickinson",
      instrument: "Vocals",
      age: 64,
    },
    {
      firstName: "Janick",
      lastName: "Gers",
      instrument: "Guitar",
      age: 66,
    },
    {
      firstName: "Dave",
      lastName: "Murray",
      instrument: "Guitar",
      age: 66,
    },
    {
      firstName: "Adrian",
      lastName: "Smith",
      instrument: "Guitar",
      age: 66,
    },
    {
      firstName: "Steve",
      lastName: "Harris",
      instrument: "Bass",
      age: 67,
    },
  ];

  /*
  objects can contain arrays 
  arrays can contain objects 
  objects can contain objets
  objects can contain object methods (functions) 
  
  Objects are a complex data type that can change after creation 
  Objects a mutable data type. 
  numbers or strings (single characters) (immutable) 
  Objects are key:value pairs and the keys need to be a immutable data type. 


  'this' keyword referse to the object it is within. 
  */

  let testObj = {};
  const obj = new Object() 

  testObj = bandMembers[0]

  testObj.instrument
  testObj.firstName  

  testObj["instrument"]

  testObj["otherInstrument"] = "ukulele" 
  let cars = {
    "toyota": "prius",
    "ford": "focus",
  }
  let maker = "toyota"; 
  cars[maker] == "prius"
  cars.maker == undefined 

  delete cars.toyota; 

  cars.toyota == undefined; 


  cars = {
    "toyota": "prius",
    "ford": "focus",
    numOfUnitsSold: 0,
    sellCar: ()=>cars.numOfUnitsSold++, 
    printOut: function () {console.log(cars)}
  }


  // console.log(cars.numOfUnitsSold)
  // cars.sellCar()
  // cars.sellCar()
  // cars.sellCar()
  // cars.sellCar()
  // cars.printOut()
  // console.log(cars.numOfUnitsSold)


/* object equality */ 

const object1 = {name: "marcus", age: 31}
const obj2 = object1
obj2["favFood"] = "everything"
// console.log("object 1 and 2: ", object1, obj2)

const obj3 = {name: "marcus", age: 31} 
const obj4 = {name: "marcus", age: 31} 

// console.log("obj 3 and 4", obj3==obj4, obj3===obj4) 
//using comparision operator to compare objects, but they have different references and therefore aren't equal
// console.log("Object.values", Object.values(obj3), Object.values(bandMembers[1]) )
// Object.keys(obj) returns an array of the keys in the object
// Object.values(obj) returns an array of the values in the object




