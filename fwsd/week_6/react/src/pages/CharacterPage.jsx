// render a specific character based on the url
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const CharacterPage = (props) => {
  const [data, setData] = useState("");
  // Starwars api request one character
  let api = "https://swapi.dev/api/people/";

  const { id } = useParams();
  let newAPI = api + id + "/";

  useEffect(() => {
    fetch(newAPI)
      .then(res => res.json())
      .then(info => setData(info));
    console.log(data);
  }, []);

  return (
    <div style={props.styles}>
      {data.name} : {data.homeworld} <div>Person Name: {data.name}</div>
      <div>Person Birthyear: {data.birth_year}</div>
    </div>
  );
};
