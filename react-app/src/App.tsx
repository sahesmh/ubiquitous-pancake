import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  console.log("Running Function App()");
  
  const [placeholderText, setPlaceholderText] = React.useState("Empty");

  // Update Placeholder Text when component mounts
  React.useEffect(() => {
    console.log("Component Mounted");
    fetch("http://localhost:8000/api/placeholder")
    .then((response) => {
      return response.json();
    })
    .then((myJSON) => {
      setPlaceholderText(myJSON.toString())
      console.log("Set Placeholder Text");
    });
  }, []);

  // Return React Component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Spotify Merger
        </h1>
        <h2>
          Merges two lists of liked/saved songs into one playlist
        </h2>
        <p>
          Placeholder Text: {placeholderText}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
