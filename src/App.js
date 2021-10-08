import logo from './logo.svg';
import './App.css';
import SelectCarButtons from './components/carButtons'
import SelectedCar from './components/car'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Please select a car color.
        </h3>
        <SelectCarButtons />
        <SelectedCar />
      </header>
    </div>
  );
}

export default App;
