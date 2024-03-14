import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'


function App() {
  const [data, setData] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3000/cars" )
      .then(res => res.json())
      .then(info => {setData(info)})
      .catch(e => console.log(e));
  }, []);
  let postCar = () => {
    axios.post("http://localhost:3000/cars", {make:"thonda",model:"thivic", numDoors:4,})
  }
  return (
    <>
      <div>
        <h2>Passing and retrieving data from a database</h2>
        <button style={{backgroundColor:"red"}} onClick={postCar}>Post The Car</button>
        <br/>
        {data && data ? data.map(car=><p>{car.make}{car.model}</p>):"no data"}
      </div>
    </>
  )
}

export default App
