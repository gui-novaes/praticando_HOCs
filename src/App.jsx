import logo from './logo.svg';
import './App.css';
import Input from './components/Input.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mouse over the field
        </p>

        <br />
        <Input></Input>
      </header>
    </div>
  );
}

export default App;
