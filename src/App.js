import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){ //  remember a component always has the role that it must render at least something.
    return (  //  �^��HTML�X���q
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

// �쥻APP���g�k�Ofunction�����A�Q�令�Hclass-react.component ���Φ��e�{�A��̥\��
/*
function App() {
  return (��);
}


class App extends React.Component {
  render(){
    return (��);
  }
}

���G 
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