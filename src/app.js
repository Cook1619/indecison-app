console.log("App.js is running!");

// JSX - JavaScript XML
const info = {
  title: "Indecision App",
  subtitle: "My first React App!!",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{info.title}</h1>
    {info.subtitle && <p>{info.subtitle}</p>}
    {info.options && info.options.length > 0 ? (
      <p>Here are your options</p>
    ) : (
      <p>No options</p>
    )}
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log("testing");
};
const minusOne = () => {
    count--
    renderCounterApp();
  console.log("minusOne");
};
const reset = () => {
    count = 0
    renderCounterApp();
  console.log("reset");
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template2, appRoot);
};

renderCounterApp();