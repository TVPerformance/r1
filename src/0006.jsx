import './App.scss';
import './Components/006.jsx/Cat'
import Cat from './Components/006.jsx/Cat';
import Dog from './Components/006.jsx/Dog';
const m = [
    {name: 'Pilkis', color: 'pink', type: 'cat'},
    {name: 'Pukis', color: 'blue', type: 'cat'},
    {name: 'Sarikas', color: 'black', type: 'dog'},
    {name: 'Rainis', color: 'yellow', type: 'cat'},
    {name: 'Bobikas', color: 'green', type: 'dog'},
]

function App() { 
    
     
  return (

    <div className="App">
      <div className="App-header">
        {m.map((a, i) => a.type === 'cat' ?
         <Cat key={i} cat={a}/> :
         <Dog key={i} dog={a}/>
         )}
      </div>
    </div>
  );
};

export default App;