import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from './constants'
import Card from "./Card"
function App() {
  const [state, setStates] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setStates(res.data);
      })
      .catch(err => {
        debugger
      })
  }, []) 
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="content">
        <Card 
          data = {state}
        />
      </div>
    </div>
  );
}
export default App;
