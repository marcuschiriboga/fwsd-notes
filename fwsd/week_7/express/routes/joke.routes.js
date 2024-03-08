import { Router } from "express";
const jokeRouter = Router();


jokeRouter.get("/", (req, res) => {
  // code 
  let allJokes = {joke1:"joke1", joke2:"joke2"}
// access database
// query all jokes 
// send as response
  res.json(allJokes);
});


jokeRouter.get("/:id", (req, res) => {
    // code 
    let singleJoke = {"what do you call a dog that knows magic?":"A l-abrakadabra-dor"}
// access database
// query 1 joke by the id
// send as response
    res.json(singleJoke);
  });
export default jokeRouter;
