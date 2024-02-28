// render a specific character based on the url
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export const PlanetPage = ({ styles }) => {
  const [data, setData] = useState("");
  // Starwars api request one character
  let api = "https://swapi.dev/api/planets/";

  const { id } = useParams();
  let newAPI = api + id + "/";
  let mainContentStyles = {
    backgroundColor: "yellow",
    outline: !data?"2px solid black":"", 
    font: ""
  } 
  useEffect(() => {
    fetch(newAPI)
      .then(res => res.json())
      .then(info => setData(info));
    console.log(data);
  }, []);
  return (
    <div style={mainContentStyles}>
      {!data ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div>Planet Name: {data.name}</div>
          <div>Planet climate: {data.climate}</div>
          <div>Planet orbital period: {data.orbital_period}</div>
        </>
      )}
    </div>
  );
};
