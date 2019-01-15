import React from "react";
import "../styles/Jumbotronstyle.css";

const name = "Clicky Game";


function Jumbotron() {
  return (
    // Why do we use "className" instead of "class"?
    // "class" is a reservered JavaScript keyword used to create class components in react
    <div className="jumbotron">

    {/* What is the signifance of the curly braces utlized below? */}
    {/* With JSX curly braces, we can inject javascript expressions such as variables and methods */}
      <h1>Welcome to the {name}.</h1>
    
      <hr />
      <h2>Click an image to earn points, but don't click on any more than once!</h2>
      
    </div>
  );
}

export default Jumbotron;