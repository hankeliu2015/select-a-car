import './App.css';
import Cars from './components/Cars'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Please select a car color.
        </h3>
        <Cars />
        
      </header>
    </div>
  );
}

export default App;
