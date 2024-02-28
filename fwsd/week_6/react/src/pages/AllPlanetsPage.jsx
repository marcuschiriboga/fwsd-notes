import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

// display all charcters
export const AllPlanetsPage = () => {
  const [data, setData] = useState("");
  // Starwars api request all chacters
  let api = "https://swapi.dev/api/planets/";
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(info => setData(info));
    console.log(data.results);
  }, []);

  return (
    <div>
      {data && data.results.map((plan,i) => (
        <div key={i}>
          {/* get id out of url string to create link */}
          <Link to={"/planets/"+(i+1)}>{plan.name}</Link>
        </div>
      ))}
    </div>
  );
};
