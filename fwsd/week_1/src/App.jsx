import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { bandMembers } from "./bandtwo";
import "./App.css";
import { NewButton } from "./components/button";
import { BandMemberCard } from "./components/BandMemberCard";
import { ButtonComponent } from "./components/ButtonComponent";



function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // anonymous function
  // vocab
  // """ Invoke = is to execute the set of instructions inside a function ""
  // introduced in es6 Arrow-functions are considerd syntax sugar.
  // State = A snapshot of computer memory
  // statement= one line of code
  // anonymous functions => use an arrow
  // Vocab:

  /* 
  Higher-Order function is a function that takes in another function a parameter.
    Objects inherit from parent objects (prototype objects)
    Method functions are the functions on an object
    map 
    forEach,  
    some 
    returns a truthy value if "some" of the items in the collection return a truthy value
    every 
    returns a truthy value if "every" item in the collections returns a truthy value. 
    find 
    returns the first value that satisfies the condition by returning a truthy value
    filter 
    returns each item as an array that satisfies the condition. 
    reduce 
    takes a function and calls it for each item in the array,
    passing the result to the next iteration


    State and props: 
    Programs are said to be "stateful" when they remember previous events
    or user interactions. 
   */

  let exampleData = 2;

  // these functions update the state
  let updateCountAdd = () => setCount(count + 1);
  let updateCountSubtract = () => setCount(count - 1);


  let addPunctuation = (word, punctuation) => word + punctuation;
  // console.log(bandMembers)

  for (let i = 0; i < bandMembers.length; i++) {
    // console.log(bandMembers[i].firstName)
  }

  // for each will invoke the passed function on each item in the collection
  //  and return the results
  // for each item in the collection invoke this function.

  // Array.map()
  // map is like for each but instead returns a new array
  // polulated by the result of the passed in function
  let newArray = bandMembers.map(obj => {
    return `${obj.instrument} played by ${obj.firstName} ${obj.lastName} `;
  });
  let readyToRetire = bandMembers.some(member => member.age > 65);
  let playGuitar = bandMembers.every(member => member.instrument == "Guitar");
  let firstGuitar = bandMembers.find(batman => batman.instrument == "Guitar");
  let eachGuitar = bandMembers.filter(member => member.instrument == "Guitar");
  const avgAge = bandMembers.reduce((sum, member, i, arr) => {
    sum += member.age;
    if (i === arr.length - 1) {
      // if the reduce method is on the last element
      return sum / arr.length;
    } else {
      return sum;
    }
  }, 0);

  // onclick is now onClick (also onMouseHover)
  // onChange and onSubmit(useful for forms)
  // onKeyDown, onKeyUp
  // onFocus( when selected) onBlur (when deselected)
  // ""event.stopPropagation()"" ""event.preventDefault()"" some have their own behaviors.
  // for example: in a form when you submit. it acts like a link

  return (
    <>
      <h2></h2>
      <ButtonComponent count={count} updateCountAdd={updateCountAdd} updateCountSubtract={updateCountSubtract}/>
      <ButtonComponent count={count} updateCountAdd={updateCountAdd} updateCountSubtract={updateCountSubtract}/>
      <ButtonComponent count={count} updateCountAdd={updateCountAdd} updateCountSubtract={updateCountSubtract}/>
      <div>
        <input
          type="text"
          name="testName"
          onChange={event => {
            setText(event.target.value);
          }}
        />
        <h4 className="read-the-docs">
          {" "}
          example data:
          { text.length ? `${text}` : "no text"}
          {/* ternary statement */}
        </h4>
      </div>
      <h2>Band Members</h2>
      <div>
        ""what is the benefit of using the new tag ?""
        {bandMembers.map((member, i) => {
          return (
            <BandMemberCard i={i} member={member}/>
          );
        })}
      </div>
    </>
  );
}

export default App;
