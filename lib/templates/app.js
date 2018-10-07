module.exports = ({ displayName }) => `import React from "react";

const App = () => (<h1>${displayName}</h1>);

App.displayName = "App";
export default App;`;
