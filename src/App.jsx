import logo from './logo.svg';
import './App.css';
import Input from './components/Input.tsx';
import Render from './components/RenderTest.tsx';

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

        <Render render={(mouseState) => <Input>{mouseState.name}</Input>} />
      </header>
    </div>
  );
}

export default App;
