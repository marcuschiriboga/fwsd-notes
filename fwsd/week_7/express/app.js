import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes"
import jokeRouter from "./routes/joke.routes";
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) =>{console.log(req)}, (req, res) => res.send("<h2>Hello Roland from the browser.<h2>"));
app.get("/endpoint", (req, res) => res.send("<h2>The endpoint endpoint.<h2>"));
app.use("/jokes", jokeRouter);
app.use("/users", userRouter);


app.listen(3001, () => console.log("[Server] Now listening on port 3001"));
console.log("hello world")


console.log("print in the local terminal")