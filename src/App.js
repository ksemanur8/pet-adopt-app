import { render } from "react-dom";
import Pet from "./Pet";

// JSX
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocaktiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

// JS
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };
// render(React.createElement(App), document.getElementById("root"));

// 1. We created a reusable component called App
// 2. Create element creates a new instance of something
// 3. We have created a div with an h1 inside of it.
// 4. Explanation of component creation
// React.createElement(
//    type,
//    [props],
//    [...children]
// )
// 5. React.createElement(App) creates an instance of App
// 6. Two types of components: class components & function components.
// 7. App is a function component
// 8. The empty objects are where you can place props (className, id, etc.)
// 9. Omitted at createElement line in ReactDOM.render because it has no props or children
// 10. ReactDOM.render is called only once in your app. React.createElement is called multiple times.
// 10. ReactDOM.render is going to change in React 18
