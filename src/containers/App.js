// import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
// import { robots } from "../robots";
import CardLists from "../components/CardLists";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

// props只能读取
// 想要更改的话，需要有一个state对象，存数据，想使用state对象的话，就需要通过class来声明类
// const App = ()=> {
//   return (
//     <div className="tc">
//       {/* 按照到道理而言，h1也 是需要改造成一个component的 */}
//       <h1>robotfriends</h1>
//       <SearchBar />
//       <CardLists robots={robots} />
//     </div>
//   );
// }

// const state = {
//   robots: robots,
//   searchFiled: "",
// };

class App extends Component {
  constructor() {
    super();
    // state在parent comoponent那里，看一下那个diagram，其实相当于通过parent component进行数据的互动
    this.state = {
      robots: [],
      searchFiled: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    // this.setState({ robots: robots });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    console.log("componentDidMount");
  }
  // 建一个函数获取searchBar的input数据
  // 这个this指向的是onSearchChange的函数调用者，这里是被input调用的，所以指向的并不是App这个类，使用箭头函数可以解决这个问题
  // 记住每次在组件中用自己的方法 ，使用箭头函数
  // onSearchChange(event) {
  onSearchChange = (event) => {
    // 要设置state的值只能用setState来设置，不能用this.state.searchField进行更改
    // this.state.searchFiled = event.target.value;
    this.setState({ searchFiled: event.target.value });
    // const filteredRobots = this.state.robots.filter((robot) => {
    //   return robot.name
    //     .toLowerCase()
    //     .includes(this.state.searchFiled.toLowerCase());
    // });
    // console.log(filteredRobots);
  };
  render() {
    console.log("render");
    const { robots, searchFiled } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        {/* 按照到道理而言，h1也是需要改造成一个component的 */}
        <h2 className="f1">robotfriends</h2>
        {/* <CardLists robots={robots} /> */}
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <CardLists robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
