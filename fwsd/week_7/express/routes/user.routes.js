import { Router } from "express";
const userRouter = Router();


userRouter.get("/", (req, res) => {
  // code 
  let allusers = {user1:"user1", user2:"user2"}
// access database
// query all jouser
// send as response
  res.json(allusers);
});


userRouter.get("/:id", (req, res) => {
    // code 
    let singleuser = {"what do you call a dog that knows magic?":"A l-abrakadabra-dor"}
// access database
// query 1 joke by the id
// send as response
    res.json(singleuser);
  });
export default userRouter;
