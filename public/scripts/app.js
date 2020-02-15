"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var info = {
  title: "Indecision App",
  subtitle: "My first React App!!",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    info.title
  ),
  info.subtitle && React.createElement(
    "p",
    null,
    info.subtitle
  ),
  info.options && info.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No options"
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log("testing");
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log("minusOne");
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log("reset");
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var template2 = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );
  ReactDOM.render(template2, appRoot);
};

renderCounterApp();
