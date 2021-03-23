import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Hello from "./Hello";
import "tachyons";
// import Card from "./Card";
// import { robots } from "./robots";
// import CardLists from "./CardLists";
import App from "./containers/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello greeting={"你好，" + "我是一个属性"} /> */}
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
    {/* <CardLists robots={robots} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
