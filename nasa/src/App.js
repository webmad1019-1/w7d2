import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScientistComponent from "./Scientist";
import Swatches from "./Swatches";

class Scientist {
  constructor(name, img, link) {
    if (name.length === 0) throw new Error("Name is empty, please indicate one");
    this.name = name;
    this.img = img;
    this.link = link;
  }
}

class App extends React.Component {
  constructor() {
    super();

    // this.colors = [<li>#ffcc00</li>, <li>#ffff33</li>]

    // this.scientists = [
    //   new Scientist(
    //     "Einstein",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    //     "https://en.wikipedia.org/wiki/Albert_Einstein"
    //   ),
    //   new Scientist(
    //     "Bohr",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    //     "https://en.wikipedia.org/wiki/Albert_Einstein"
    //   ),
    //   new Scientist(
    //     "Marie Curie",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    //     "https://en.wikipedia.org/wiki/Albert_Einstein"
    //   ),
    //   new Scientist(
    //     "Penrose",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    //     "https://en.wikipedia.org/wiki/Albert_Einstein"
    //   )
    // ];

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    let colorGenerator = elems =>
      Array(elems)
        .fill()
        .map(x => `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`);

    this.state = {
      colors: [colorGenerator(24), colorGenerator(12), colorGenerator(12), colorGenerator(12)],
      name: "Quique",
      age: 29
    };

    setInterval(() => {
      this.setState({
        colors: [colorGenerator(24), colorGenerator(12), colorGenerator(12), colorGenerator(12)]
      });
    }, 10000);
  }

  render() {
    return (
      <section className="App">
        <h1>My favourite student is {this.state.name} and his age is {this.state.age}</h1>
        {this.state.colors.map((colorsArr, idx) => {
          return <Swatches key={idx} colors={colorsArr}></Swatches>;
        })}
        {/* <ul>
          {this.colors}
          {{this.scientists.map(scientist => {
          return (
            <li>
              <ScientistComponent
                name={scientist.name.toUpperCase()}
                img={scientist.img}
                link={scientist.link}
              ></ScientistComponent>
            </li>
          );
        })} 
        </ul> */}
      </section>
    );
  }
}
export default App;
