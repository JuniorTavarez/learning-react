console.log("App.js is running!");

// JSX - JavaScript XML
var template = (
  <div>
    <h1> Indecision App</h1>
    <p>This is some info</p>;
  </div>
);

var template2 = (
  <div>
    <h1>Junior Tavarez</h1>
    <p> Age: 30</p>
    <p> Location: NorthCarolina</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
