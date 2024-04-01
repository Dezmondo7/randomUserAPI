import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  // Craete const variable to store the data
  const url = "https://randomuser.me/api"
  // UseState to track the data
  const [personData, setPersonData] = useState([{}])
  // useEffect to fecth the data usin ES6 & backtick to to handle template literals and then parse the result into json
  useEffect(() => {
    fetch(`${url}`).then(
      res => res.json()
      // Then whatever data is returned set that data to setPersonData
    ).then(
      data => {
        setPersonData(data)
        console.log(data)
      }
    )
  }, []);

  return (
    // Checking to see if the data that is returned using ternary operator if not present loading Div
    <div>
      {(typeof personData.results === 'undefined') ? (
        <div>
          <p>Data is loading...</p>
        </div>
      ) : (
        // Once the data is returned as defined if will load the below as an array
        <div>  
          <p>Data has loaded succesfully!</p>
          <p>Name: {personData.results[0].name.first} {personData.results[0].name.last}</p>
          <p>Age: {personData.results[0].dob.age}</p>
          <p>Gender: {personData.results[0].gender}</p>
        </div>
      )}
    </div>
  );
}

export default App
