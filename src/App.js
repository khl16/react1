import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Dojo!</h1>
        <h3> Things i need to do:</h3>
        <ul>
          <li>Learn React</li>
          <li>climb mt. evarest</li>
          <li>run a marathon</li>
          <li>fiad the Dogs </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
