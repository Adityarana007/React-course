// const heading = React.createElement("h1", {id: 'heading'}, "Hello world from React");
// console.log('heading_', heading)  // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1>Hi from nested tags in React</h1>
//  *      </div>
//  * </div>
//  */
// // Now question comes... how to create nested tags in react (above structure)

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hi from nested tags in React")
//   )
// );
// console.log('parent', parent)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1>Hi from h1 tag in React</h1>
//  *          <h2>Hi from h2 tag in React</h2>
//  *      </div>
//  * </div>
//  */
// // Now we need to add siblings i.e above structure

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi from h1 tag in React"),
//     React.createElement("h2", {}, "Hi from h2 tag in React"),
//   ])
// );
// console.log("parent", parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hi from h1 tag in React</h1>
 *          <h2>Hi from h2 tag in React</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>Hi from h1 tag in React</h1>
 *          <h2>Hi from h2 tag in React</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi from h1 tag in React"),
    React.createElement("h2", {}, "Hi from h2 tag in React"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi from h1 tag in child1"),
    React.createElement("h2", {}, "Hi from h2 tag in child1"),
  ]),
]);
console.log("parent", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
