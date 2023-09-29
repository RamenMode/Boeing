import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [recording, setRecording] = useState('Record')
  const [backgroundcolor, setBackgroundColor] = useState('Green')

  const toggleRecord = () => {
    if (recording == 'Record') {
      setRecording('Stop')
      setBackgroundColor('Red')
    } else {
      setRecording('Record')
      setBackgroundColor('Green')
    }
  }

  return (

    <div className="App" style = {{display: "flex", flexDirection: "column", alignItems: 'center'}}>
      <div className = "Navbar" style={{alignItems: "center", display: "flex", justifyContent: "space-between"}}>
        <div style={{alignItems: "flex-start"}}>
          <img src={require('./assets/BoeingLogo.png')} height="80px" style = {{marginLeft: "50px"}}/>
        </div>
        <div style={{alignItems: "flex-end", flexDirection: "row", display: "flex"}}>
          <h1 style = {{marginRight: "25px", fontFamily: "Courier New"}}>NLP Application to Aircraft Maintenance</h1>
          <img src={require('./assets/NotreDame.png')} height="80px" style = {{marginRight: "50px"}}/>
        </div>
      </div>
      <div className = "main-container" style = {{height: "80vh", width: "80vw", backgroundColor: 'white', display: 'flex', justifyContent: "space-between"}}>
        <div className = "record" style = {{height: "80vh", width: "35vw"}}>
          <textarea className = "record-text" style = {{height: "60vh", width: "34.6vw", padding: "0px", fontFamily: "Courier New", fontWeight: "bold", fontSize: "20px"}}>
          
          </textarea>
          <div style = {{height: "20vh", display: 'flex', flexDirection: 'row'}}>
            <div style = {{flex: 1, backgroundColor: 'gainsboro', border: "1px black solid", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <button style = {{height: "5vh", width: "10vh", backgroundColor: backgroundcolor, border: 'none', borderRadius: '1px', color: 'whitels'}} onClick={() => toggleRecord()}>{recording}</button>
            </div>
            <div style = {{flex: 1, backgroundColor: 'gainsboro', border: "1px black solid", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
              <button style = {{height: "5vh", width: "10vh", marginBottom: "10px"}}>Save As</button>
              <input></input>
            </div>
          </div>
          
        </div>
        <div className = "fetch" style = {{height: "80vh", width: "35vw", backgroundColor: 'gainsboro', display: "flex", alignItems: "center", flexDirection: "column", position: 'relative'}}>
              <div style = {{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', height: "20vh", width: "35vw"}}>
                <input></input>
                <button style = {{height: "5vh", width: "10vh", marginTop: "10px"}}>Retrieve</button>
              </div>
              <textarea readOnly className = "record-text" style = {{height: "60vh", width: "34.6vw", padding: "0px", fontFamily: "Courier New", fontWeight: "bold", fontSize: "20px", position: "absolute", bottom: "0px"}}>
          
            </textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
