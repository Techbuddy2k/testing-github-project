import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Techbuddy</h1>
        <h3>It's my first react project</h3>
        <a
          className="App-link"
          href="https://techbuddy.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
