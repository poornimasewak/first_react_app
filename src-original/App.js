import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
// let name = "Test"

function App() {
  return (
    <>
     <Hello />
     <Hello />
     <Hello />
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
     
      <Hello />
    </>
  );
}

export default App;
