import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AllCharactersPage } from "./pages/AllCharacterPage";
import { CharacterPage } from "./pages/CharacterPage";
import { AllPlanetsPage } from "./pages/AllPlanetsPage"
import { PlanetPage } from "./pages/PlanetPage"
import { Header } from "./components/Header";
import { HomePage } from "./pages/Homepage";
import {Link} from "react-router-dom"
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  // Starwars api
  let api = "https://swapi.dev/api/";
  let mainContentStyles = {
    backgroundColor: "yellow",
    outline: "2px solid black", 
    font: ""
  } 
  let footerContentStyles = {
    backgroundColor: "yellow",
    outline: "2px solid black", 
    fontSize: "25px"
  } 

  useEffect(() => {
    fetch(api + "people/1")
      .then(res => res.json())
      .then(info => setData(info)).catch(e=>console.log(e));
  }, []);

  // page for people
  // a sub page for a person
  // a page for planets
  // a subpage for a planet

  return (
    <>
      {/* access an api */}
      {/* {get back data} */}
      {/* render a page from it */}
      {/* maybe a sub page */}
      {/* hockey team page, hockey roster page and a stats page */}

      {/* <Route path="/teams" element={<CharacterPage />} /> */}
      {/* <Route path="/teams/:name" element={<TeamDetailsPage />}> */}

      {/* and style the pages */}

      {/* in-line */}
      {/* style sheets */}
      {/* style modules */}
      {/* 3rd party apps like styled-components library */}
      {/* Bootstrap css framework */}
      {/* mediaquery adjust the layout based on the size of the screen */}
      {/* sass extends CSS with features like variables and nesting */}
      <Header/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="characters" element={<AllCharactersPage />}></Route>
        <Route path="characters/:id" element={<CharacterPage styles={mainContentStyles} secondaryStyling={footerContentStyles} thirdprop={"hi, Roland!"}/>}></Route>
        <Route path="planets" element={<AllPlanetsPage />}></Route>
        <Route path="planets/:id" element={<PlanetPage styles={mainContentStyles}/>}></Route>
      </Routes>

      <footer style={footerContentStyles}>
        <Link to="">Return Home </Link>
        <a href="/">home</a>
      </footer>
    </>
  );
}

export default App;
