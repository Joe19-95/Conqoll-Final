import React, { useEffect, useState } from 'react';
import './App.css';
import City from "./City";
import Navbar from "./Navbar";
import ShortList from "./ShortList";


function App() {
  const [tog, setTog] = useState(true)
  const toger = ()=>{
    console.log(tog)
    setTog(true)
  }
  const togertru = ()=>{
    console.log(tog)
    setTog(false)
  }

  return (
    <div className="App">
      <Navbar toger={toger} togertru={togertru} ></Navbar>
      { tog&&<City></City>}
      { !tog&&<ShortList></ShortList>}
    </div>
  );
}

export default App;
