import logo from './logo.svg';
import './App.css';
import SelectCarButtons from './components/carButtons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Please select a car color.
        </h3>
        <SelectCarButtons />
      </header>
    </div>
  );
}

export default App;
