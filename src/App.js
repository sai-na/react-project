import { render } from 'react-dom';
// import { ReactDOM } from "react-dom";
import Pet from "./Pet";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />


    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById("root"));

render(<App />, document.getElementById("root"));