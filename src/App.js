import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron/index.js";
import Card from "./components/Card/index.js"
import Footer from "./components/Footer"
import friends from "./friends.json";
// import Counter from "./components/Counter.js"
// Added Counter, but will need to review counter in react_practice

class App extends React.Component {
  state = {
    clicked:null,

  }
  handleImageClick (){
    // console.log(this.state.clicked)
  }
  render(){
    console.log(this.state.clicked)
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <Card
          image={friends[0].image}
          handleImageClick={this.handleImageClick}
        />
        <Card
          name={friends[1].name}
          image={friends[1].image}
          occupation={friends[1].occupation}
          location={friends[1].location}
        />
        <Card
          name={friends[2].name}
          image={friends[2].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
         <Card
          name={friends[2].name}
          image={friends[3].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
         <Card
          name={friends[2].name}
          image={friends[4].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[5].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[6].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[7].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[8].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[9].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[10].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Card
          name={friends[2].name}
          image={friends[11].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
