import React from "react";
import '../styles/App.css';
import Container from "./Container";

const App = ({slides}) => {
  return (
    <>
    <div className="App">
    <Container slides={slides}/>
    </div>
    </>
  )
}


export default App;
