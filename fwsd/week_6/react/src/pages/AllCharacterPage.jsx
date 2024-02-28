import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

// display all charcters
export const AllCharactersPage = () => {
  const [data, setData] = useState("");
  // Starwars api request all chacters
  let api = "https://swapi.dev/api/people/";
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(info => setData(info));
    console.log(data.results);
  }, []);

  return (
    <Container fluid>
    <div>
      {data && data.results.map((char,i) => (
        <div key={i}>
          {/* get id out of url string to create link */}
          <Link to={"/characters/"+(i+1)}>{char.name}</Link>
        </div>
      ))}
    </div>
    </Container>
  );
};
