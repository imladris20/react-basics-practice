import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){ //  remember a component always has the role that it must render at least something.
    return (  //  回傳HTML碼片段
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React (TWICE is the best!)
          </a>
        </header>
      </div>
    );
  }
}

export default App;

// 原本APP的寫法是function型式，被改成以class-react.component 的形式呈現，兩者功能
/*
function App() {
  return (☆);
}


class App extends React.Component {
  render(){
    return (☆);
  }
}

☆： 
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div>
)
*/