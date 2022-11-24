import './App.css';
import Valio from './Components/Valio.jsx';
import Rand from './Functions/Rand.js'
function App() {
  return (
    <div className="App">
      <header className="App-header" style={{color: Rand(0, 1)? 'red' : 'blue'}}>
      <Valio></Valio>
      </header>
    </div>
  );
}

export default App;
