import { useState } from "react";
import "./App.css";
import { PlayerCard } from "./components/PlayerCard";
import { defenseLines, forwardLines, goalies } from "./teamRoster";
import { TeamCard } from "./components/TeamCard";
function App() {
  let [forwardLineNumber, setForwardLineNumber] = useState(0);
  const [oneForwardLine, setOneForwardLine] = useState(
    forwardLines[forwardLineNumber]
  );
  const [oneDefenseLine, setOneDefenseLine] = useState(defenseLines[0]);
  const [team, setTeam] = useState({
    name: "Panthers",
    location: "Florida",
    stadium: "FLA Live Arena",
    founded: "1993",
  });
  {
    /* build cards for the hockey team  √*/
  }
  {
    /* abstract cards to their own components:
       build a flexible and reusable component*/
  }
  {
    /* pass props and conditionally render the components */
  }

  //  day 2 each position should show one line at a time.
  // we will need something to select which one (function)
  // if we have time we can create a form to update state.

  //day 3
  // (refactor state to use a team variable)
  // handling changing state from the page
  // passing data from parent to children components

  const handleInputChange = e => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    })
    console.log(team)
  };

  let updateForwardLine = () => {
    if (oneForwardLine.line < forwardLines.length - 1) {
      setForwardLineNumber(forwardLineNumber + 1);
    } else {
      setForwardLineNumber(0);
    }
    setOneForwardLine(forwardLines[forwardLineNumber]);
    console.log(forwardLines.length, forwardLineNumber);
  };
  return (
    <>
      <h1>Hockey Roster</h1>

      <TeamCard team={team} handleInputChange={handleInputChange}/>


      <div className="forwards" style={{ outline: "4px solid red" }}>
        <h3>Offense line: {forwardLineNumber + 1}</h3>
        <button onClick={updateForwardLine}>Next Line</button>
        {/* this is one forward line. we map and make a structure that shows all 3 lines below */}
        {oneForwardLine.players.map(player => {
          return <PlayerCard player={player} />;
        })}
      </div>
      <div className="defense" style={{ outline: "4px solid red" }}>
        <h3>Defense hoo haha</h3>
        {/* loop over defenseLines.length and create buttons dynamically and 
      pass the incrementor to each button to update state  */}
        <button
          onClick={() => {
            setOneDefenseLine(defenseLines[0]);
          }}
        >
          line 1
        </button>
        <button
          onClick={() => {
            setOneDefenseLine(defenseLines[1]);
          }}
        >
          line 2
        </button>
        <button
          onClick={() => {
            setOneDefenseLine(defenseLines[2]);
          }}
        >
          line 3
        </button>
        {oneDefenseLine.players.map(player => {
          return <PlayerCard player={player} />;
        })}
      </div>
      <div className="goalies" style={{ outline: "4px solid red" }}>
        <h3>Goalies</h3>
        {goalies.map(player => {
          return <PlayerCard player={player} />;
        })}
      </div>
    </>
  );
}

export default App;
